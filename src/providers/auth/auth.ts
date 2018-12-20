import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth : AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticateUser(){
    return this.auth.authState;
  }

  async createUserWithEmailAndPassword(account){
    try {
      return <LoginResponse>{
        result : await this.auth.auth.createUserAndRetrieveDataWithEmailAndPassword(account.email,account.password)
      }
    } catch (e) {
      return <LoginResponse>{
        error : e
      }
    }
  }

  async signWithEmailAndPassword(account : Account){
    console.log(account);
    try {
      return<LoginResponse>{
        result :  await this.auth.auth.signInAndRetrieveDataWithEmailAndPassword(account.email,account.password)
      }
    } catch (e) {
      return<LoginResponse>{
        error : e
      }
    }
  }
}
