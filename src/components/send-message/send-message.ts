import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SendMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-message',
  templateUrl: 'send-message.html'
})
export class SendMessageComponent {

  @Output() sendMessage :EventEmitter<string>;

  content : string;

  constructor() {
    console.log('Hello SendMessageComponent Component');
    this.sendMessage = new EventEmitter<string>();
  }

  send(){
    this.sendMessage.emit(this.content);
    this.content = "";
  }

}
