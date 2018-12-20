import { Component, EventEmitter, Output } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { User as UserFire } from 'firebase';
import { User } from '../../models/user/user.interface';
import { Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent {

  public userProfile : User;

  authUser : User;
  loader : Loading;

  @Output() existingProfile : EventEmitter<User>;

  constructor(private data : DataProvider, private auth : AuthProvider, private loading : LoadingController ) {

    console.log('Hello ProfileViewComponent Component');

    this.existingProfile = new EventEmitter<User>();
    this.loader = this.loading.create({
      content : 'Loading'
    });
    // this.userProfile = {firstName : '0', lastName:'Tes',email:'0@tes.com',avatar:'assets/imgs/avatar.jpg', dateOfBirth:new Date() };
  }

  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth.getAuthenticateUser().subscribe((user : UserFire) => {
      this.data.getUser(user).subscribe(profile => {
        // console.log("Log");
        // console.log(profile.payload.val());
        this.userProfile = <User>profile.payload.val();
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      })
    })
  }

}
