import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User as userFire, auth } from 'firebase';
import { User } from '../../models/user/user.interface';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  userObject: AngularFireObject<User>;

  userList : AngularFireList<User>;

  constructor(private auth: AuthProvider, private database:AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  searchUser(firstName : string){
    const query = this.database.list('/user',ref =>     
      ref.orderByChild('firstName').equalTo(firstName)
    )
    console.log(query.valueChanges());
    return query.valueChanges();
  }

  // getAuthenticatedUser(){
  //   let result = this.auth.getAuthenticateUser()
  //   .map(user => 
  //     console.log(user.uid),
  //     this.database.object('/user/'+user.uid).valueChanges());
  //   console.log(result);
  //   return result;
  // }

  getUser(user : userFire){
    this.userObject = this.database.object('/user/'+user.uid);
    // return this.userObject.valueChanges();
    return this.userObject.snapshotChanges();
  }

  async saveProfile(user:userFire,profile:User){
    this.userObject = this.database.object('/user/'+user.uid);

    try {
      await this.userObject.set(profile);
      return true;
    } catch (e) {
      console.error("Error"+e)
      return false;
    }
  }

}
