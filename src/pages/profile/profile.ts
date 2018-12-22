import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { User } from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as User;
  
  constructor(private appCtrl : App , private auth : AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  OpenEditProfile(){
    this.navCtrl.push('EditProfilePage', 
    {
      existingProfile : this.existingProfile
    });
  }

  getExistingUser(user : User){
    this.existingProfile = user;
    console.log(this.existingProfile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  Logout(){
    this.auth.Logout();
    // this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.popToRoot();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
