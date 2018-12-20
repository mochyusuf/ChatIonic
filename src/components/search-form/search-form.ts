import { Component } from '@angular/core';
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

  userList : any[];

  constructor(private data : DataProvider) {
    console.log('Hello SearchFormComponent Component');
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
