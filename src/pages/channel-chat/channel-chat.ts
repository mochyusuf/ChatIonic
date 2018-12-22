import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channel/channel.interface';
import { ChannelProvider } from '../../providers/channel/channel';
import { Observable } from 'rxjs';
import { ChannelMessage } from '../../models/channel/channel-message.interface';
import { AngularFireObject } from 'angularfire2/database';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel : Channel;
  channelMessage : Observable<ChannelMessage[]>;

  constructor(private chat : ChannelProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ChannelChatPage');
    this.channel = this.navParams.get('channel');
    console.log(this.channel);
    this.channelMessage = this.chat.getChannelChatRef(this.channel.$key).valueChanges();
  }

  sendMessage(content:string){
    let channelMessage : ChannelMessage = {
      content
    }

    console.log("Key Channel");
    console.log(this.channel.$key);

    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
  }

}
