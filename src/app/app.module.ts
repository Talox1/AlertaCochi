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
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppPasswordDirective } from './app-password.directive';
import { RegisterPromoComponent } from './components/register-promo/register-promo.component';

//image library
import { ImageUploadModule } from 'angular2-image-upload';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewRestaurantComponent } from './components/view-restaurant/view-restaurant.component';
import { ListPromosComponent } from './components/view-restaurant/list-promos/list-promos.component';
import { NewPromoComponent } from './components/view-restaurant/new-promo/new-promo.component';
import { ProfileComponent } from './components/view-restaurant/profile/profile.component';


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
    NavbarComponent,
    AppPasswordDirective,
    RegisterPromoComponent,
    ViewRestaurantComponent,
    ListPromosComponent,
    NewPromoComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    
    BrowserAnimationsModule
    // NgbModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
