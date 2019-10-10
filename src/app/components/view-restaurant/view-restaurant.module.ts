import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//routing 
import {ViewRestaurantRoutes} from '../view-restaurant/view-restaurant.routing'
import { ListPromosComponent } from './list-promos/list-promos.component';
import { NewPromoComponent } from './new-promo/new-promo.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
 
 @NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(ViewRestaurantRoutes),
     
   ],
   declarations: [
    ListPromosComponent,
    NewPromoComponent,
    ProfileComponent,
   ]
 })
 
 export class ViewRestaurantModule {}
 