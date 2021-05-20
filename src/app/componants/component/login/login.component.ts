
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users/users.service';
//import { Router, NavigationStart } from '@angular/router';
//import { filter } from 'rxjs/operators';

import {  throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users;
 // logIn : boolean=false;
 // currentPage:number;
 // lastPage:number;

 loginForm = new FormGroup({
   name : new FormControl('',[Validators.required]),
   password : new FormControl('',[Validators.required])
 });
  constructor(private userService:UsersService,private router:Router ) {
  }
   
   

  ngOnInit() {
    this.userService.listUser().subscribe(res => { 
      console.log(res.data);
      this.users=res.data;
    });
  }
 
  login()  {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((res : any) =>
      {
       // console.log(this.logIn);
        environment.jwt=res;
        this.userService.logInSer=true;
       // localStorage.setItem('isLoggedIn', 'true');
       // console.log(res);
       // console.log(environment.jwt);
        console.log(this.userService.logInSer +'comp');
        this.router.navigate['/home'];
      }
      );
      
      
    }else
    {
      this.loginForm.markAllAsTouched();
    
    }
    
    
  } 




}
