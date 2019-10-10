import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterBussinessComponent } from './components/register-bussiness/register-bussiness.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { AssignmentBRComponent } from './components/assignment-br/assignment-br.component';
import { RegisterPromoComponent } from './components/register-promo/register-promo.component';
import { ViewRestaurantComponent } from './components/view-restaurant/view-restaurant.component';
import { ListPromosComponent } from './components/view-restaurant/list-promos/list-promos.component';
import { NewPromoComponent } from './components/view-restaurant/new-promo/new-promo.component';
import { ProfileComponent } from './components/view-restaurant/profile/profile.component';

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
  },
  {
    path: 'assignmentBussinessRestaurant',
    component: AssignmentBRComponent
  },
  {
    path:'registerPromo',
    component:RegisterPromoComponent
  },
  {
    path: 'homeRestaurant',
    component: ViewRestaurantComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './components/view-restaurant/view-restaurant.module#ViewRestaurantModule'
    // }]
  },{
    path:'mypromos',
    component:ListPromosComponent
  },{
    path:'newpromo',
    component:NewPromoComponent
  },{
    path:'profile',
    component:ProfileComponent
  }
  
  // {path:'**',  redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
