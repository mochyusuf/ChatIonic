import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Channel } from '../../models/channel/channel.interface';
import { ChannelMessage } from '../../models/channel/channel-message.interface';

/*
  Generated class for the ChannelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChannelProvider {

  constructor(private database : AngularFireDatabase) {
    console.log('Hello ChannelProvider Provider');
  }

  addChannel(channelName : string){
    this.database.list('/channel-name/').push({name:channelName});
  }

  getChannelListRef() : AngularFireList<Channel>{
    return this.database.list('channel-name');
  }

  getChannelChatRef(channelKey : string) : AngularFireList<ChannelMessage>{
    return this.database.list('channels/'+channelKey);
  }

  async sendChannelChatMessage(channelKey : string, message: ChannelMessage){
    console.log(channelKey);
    await this.database.list('/channels/'+channelKey).push(message);
  }

}
