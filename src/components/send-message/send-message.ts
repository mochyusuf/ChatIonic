import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello SendMessageComponent Component');
    this.text = 'Hello World';
  }

}
