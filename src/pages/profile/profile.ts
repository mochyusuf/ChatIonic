import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from 'firebase';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
