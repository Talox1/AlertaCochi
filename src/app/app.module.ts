import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegisterBussinessComponent } from './components/register-bussiness/register-bussiness.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { AssignmentBRComponent } from './components/assignment-br/assignment-br.component';



import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import {HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LoginAdminComponent,
    RegisterBussinessComponent,
    ViewAdminComponent,
    AssignmentBRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
