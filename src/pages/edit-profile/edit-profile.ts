import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.interface';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  existingProfile = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.existingProfile = this.navParams.get('existingProfile');
    console.log(this.existingProfile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveUserResult(event: boolean){
    event ? this.navCtrl.setRoot('TabsPage') : console.log('Not Auth');
  }
}
