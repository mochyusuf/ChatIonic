import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  constructor(private navCtrl : NavController,private fireAuth : AngularFireAuth) {
    console.log('Hello LoginFormComponent Component');
  }

  async login(){
    try{
      const result = await this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.account.email,this.account.password);
      this.OpenPage("TabsPage");
    }catch(e){
      console.error(e);
    }
  }

  OpenPage(Page : string){
    Page === "TabsPage" ? this.navCtrl.setRoot(Page) : this.navCtrl.push(Page);
  }

}
