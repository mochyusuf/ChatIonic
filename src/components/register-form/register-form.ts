import { Component,EventEmitter,Output } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import {Account} from "../../models/account/account.interface";
import { LoginResponse } from '../../models/login/login.interface';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  formgroup : FormGroup;
  check : boolean;

  @Output() registerStatus: EventEmitter<LoginResponse> = new EventEmitter<LoginResponse>();
  
  constructor(private auth: AuthProvider, private toastCtrl : ToastController, private fireAuth: AngularFireAuth, public formBuilder : FormBuilder) {
    console.log('Hello RegisterFormComponent Component');
    this.check = false;
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

  async Register(){
    
    this.check = true;
    
    if (this.formgroup.valid) {
      try{
        const result = await this.auth.createUserWithEmailAndPassword(this.account);
        console.log("Register");
        console.log(result);
        this.registerStatus.emit(result);
      }catch(e){
        console.error(e);
        this.registerStatus.emit(e);
      }
    }
  }
}
