import { Component, Input } from '@angular/core';
import { Messages } from '../../models/messages/messages.interface';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage  : Messages;

  @Input() chatIndex : number;

  constructor() {
    console.log('Hello ChatMessageComponent Component');
  }

}
