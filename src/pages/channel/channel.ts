import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChannelProvider } from '../../providers/channel/channel';
import { Channel } from '../../models/channel/channel.interface';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';

/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  channelList : Observable<Channel[]>;
  constructor(private channel: ChannelProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
    this.getChannel();
  }

  showChannel(){
    this.alertCtrl.create({
      title:'Channel Name',
      inputs:[{
        name:'channelName'
      }],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Add',
          handler:data=>{
            this.channel.addChannel(data.channelName);
          }
        }
      ]
    }).present();
  }

  selectChannel(channel : Channel){
    console.log(channel);
    this.navCtrl.push('ChannelChatPage',{
      channel : channel
    });
  }

  getChannel(){
    this.channelList = this.channel.getChannelListRef();
  }

}
