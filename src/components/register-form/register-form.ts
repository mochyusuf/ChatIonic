import { Component,EventEmitter,Output } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import {Account} from "../../models/account/account.interface";
import { LoginResponse } from '../../models/login/login.interface';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;
  
  constructor(private auth: AuthProvider, private toastCtrl : ToastController, private fireAuth: AngularFireAuth) {
    console.log('Hello RegisterFormComponent Component');
  }

  async Register(){
    try{
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      console.log("Register");
      console.log(result);
      this.registerStatus.emit(result);
    }catch(e){
      console.error(e);
      this.registerStatus.emit(e);
    }
  }
}
