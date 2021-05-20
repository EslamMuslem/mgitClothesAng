import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './shared/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  loginFlag =false;
  constructor(private router: Router,userFlag:UsersService){ 
   // console.log(userFlag.logIn);
   // this.loginFlag = userFlag.logIn;
   // console.log(this.loginFlag);
  // this.loginFlag=userFlag.logInSer;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //  this.loginFlag =localStorage.getItem('isLoggedIn');
      console.log(this.loginFlag +'auth');
      if( !this.loginFlag )
      return this.router.createUrlTree(['/login']);
      else
      return true;
  }
  
}
