import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login.interface";
import { AuthProvider } from "../../providers/auth/auth";
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  @Output() loginStatus:EventEmitter<LoginResponse>;
  formgroup : FormGroup;
  check : boolean;

  constructor(private auth: AuthProvider, private navCtrl : NavController,private fireAuth : AngularFireAuth, public formBuilder : FormBuilder) {
    console.log('Hello LoginFormComponent Component');
    this.loginStatus=new EventEmitter<LoginResponse>();
    this.check = false;

    // this.formgroup = formBuilder.group({
    //   email:['', Validators.compose([Validators.required])],
    //   password:['', Validators.compose([Validators.required])],
    // })

    this.formgroup = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
    })
  }

  async login(){
    this.check = true;
    if (this.formgroup.valid) {
      const result = await this.auth.signWithEmailAndPassword(this.account);
      this.loginStatus.emit(result);
    }
    // try{
    //   const response : LoginResponse = {
    //      result : await this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.account.email,this.account.password)
    //   }
    //   console.log(response);
    //   this.loginStatus.emit(response);
    //   // this.OpenPage("TabsPage");
    // }catch(e){
    //   console.error(e);
    //   const error : LoginResponse = {
    //     error : e
    //   }
    //   this.loginStatus.emit(error);
    // }
  }

  OpenPage(Page : string){
    Page === "TabsPage" ? this.navCtrl.setRoot(Page) : this.navCtrl.push(Page);
  }

}
