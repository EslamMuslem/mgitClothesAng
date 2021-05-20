import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './componants/component/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path :'',
  component: HomeComponent,
 // canActivate:[AuthGuardGuard]

},
{
  path :'login',
  component: LoginComponent
},
{
  path :'home',
  component: HomeComponent,
  canActivate:[AuthGuardGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
