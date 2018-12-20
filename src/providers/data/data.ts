import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User as userFire } from 'firebase';
import { User } from '../../models/user/user.interface';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  userObject: AngularFireObject<User>;

  constructor(private database:AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

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
