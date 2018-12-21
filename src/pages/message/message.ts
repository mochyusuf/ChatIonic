import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.interface';
import { MESSAGE_LIST } from '../../mocks/messages/messages';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedUser : User;

  messageList : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST;
    console.log(MESSAGE_LIST);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    this.selectedUser = this.navParams.get('user');
  }

}
