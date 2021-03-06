import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.interface';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private appCtrl : App ,private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event: LoginResponse){
    // if (event != undefined && event != null) {
      console.log(event);
      if (!event.error) {
        let mess = "Account Create" + event.result.user.email;
        this.toastCtrl.create({
          message:mess,
          duration:3000
        }).present();
        this.appCtrl.getRootNav().setRoot(LoginPage);
        console.log(mess)
      } else {
        let mess = "" + event.error;
        this.toastCtrl.create({
          message:mess,
          duration:3000
        }).present();
        console.log(mess)
      }
    // }
  }
}
