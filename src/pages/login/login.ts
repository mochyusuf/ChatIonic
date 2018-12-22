import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.interface';
import { User as UserFire } from 'firebase';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data:DataProvider, public navCtrl: NavController, public navParams: NavParams,private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(event : LoginResponse){
    console.log(event);
    if (!event.error) {
      let mess = "Welcome , "+ event.result.user.email;
      this.toastCtrl.create({
        message:mess,
        duration:3000,
      }).present();

      this.data.getUser(<UserFire>event.result.user).subscribe(User => {
        console.log(User);
        this.navCtrl.setRoot('TabsPage');
      })
      // this.navCtrl.setRoot("TabsPage")
    } else {
      this.toastCtrl.create({
        message:event.error.message,
        duration:500
      }).present();
    }
  }

}
