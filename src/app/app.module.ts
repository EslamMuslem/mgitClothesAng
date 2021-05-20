
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCollapseComponent } from './componants/temp/list-collapse/list-collapse.component';
import { HeaderComponent } from './componants/temp/header/header.component';
import { FooterComponent } from './componants/temp/footer/footer.component';
import { LoginComponent } from './componants/component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListCollapseComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
