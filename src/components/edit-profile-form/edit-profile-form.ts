import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/user/user.interface";
import { Subscription } from 'rxjs';
import { User as UserFire } from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  private authenticatedUser$ : Subscription;
  private authenticatedUser:UserFire
  user = {} as User;

  @Output() saveUserResult : EventEmitter<Boolean>;

  constructor(private auth : AuthProvider, private data : DataProvider) {
    this.saveUserResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticateUser().subscribe((user:UserFire)=>{
      this.authenticatedUser = user;
    })
    console.log('Hello EditProfileFormComponent Component');
  }

  async save(){ 
    if (this.authenticatedUser) {
      this.user.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser,this.user);
      console.log(result);
      this.saveUserResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.authenticatedUser$.unsubscribe();
  }
}
