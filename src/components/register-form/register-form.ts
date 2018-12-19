import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import {Account} from "../../models/account/account.interface";

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

  constructor(private toastCtrl : ToastController, private fireAuth: AngularFireAuth) {
    console.log('Hello RegisterFormComponent Component');
  }


  async Register(){
    try{
      const result = await this.fireAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toastCtrl.create({
        message:"Account Created",
        duration:2000
      }).present();
      console.log(result);
    }catch(e){
      console.error(e);
      this.toastCtrl.create({
        message:e.message,
        duration:2000
      }).present();
    }
  }
}
