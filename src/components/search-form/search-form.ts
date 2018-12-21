import { Component, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { User } from '../../models/user/user.interface';
import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';



/**
 * Generated class for the SearchFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-form',
  templateUrl: 'search-form.html'
})
export class SearchFormComponent {

  query: string;

  @Output() selectedUser : EventEmitter<User>;

  userList : any[];

  constructor(private data : DataProvider) {
    console.log('Hello SearchFormComponent Component');
    this.selectedUser = new EventEmitter<User>();
  }

  selectUser(user : User){
    this.selectedUser.emit(user);
  }

  searchUser(query : string){

    query = query.trim();
    this.data.searchUser(query).subscribe(ref => {
        console.log(ref);
        this.userList = ref;
    },(err)=>{
      console.log("Error : ", err)
   });
    console.log(this.userList);
  }
}
