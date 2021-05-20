import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  myUrl;
 logInSer=false;

  constructor(private httpClient: HttpClient) {
    this.myUrl = environment.apiUrl;
   }

   login(data:{'name': string, 'password': string}){
    return this.httpClient.post(this.myUrl+'/user/logIn',data);
  }
   
   //test
  
//  users
  listUser(nPage=1):Observable<any>{
    return this.httpClient.get('https://reqres.in/api/users?page=${nPage}');
    //.subscribe(res => {console.log(res);this.users=res;});

    /* login(){
    this.httpClient.post('http://localhost:8081/clothes/user/logIn',{
       "name":"tet",
      "password":"tet"
    }
    ).subscribe(res => {
      console.log(res);
    });
  }*/
    
  }
}
