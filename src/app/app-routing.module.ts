import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterBussinessComponent } from './components/register-bussiness/register-bussiness.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'registerRestaurant',
    component:RegisterComponent
  },
  {
    path:'registerBussiness',
    component:RegisterBussinessComponent
  },
  {
    path:'loginRestaurant',
    component:LoginComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path: 'homeAdmin',
    component: ViewAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
