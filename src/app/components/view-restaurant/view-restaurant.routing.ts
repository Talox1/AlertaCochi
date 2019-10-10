import { Routes } from '@angular/router';
import { ListPromosComponent } from './list-promos/list-promos.component';
import { NewPromoComponent } from './new-promo/new-promo.component';
import { ProfileComponent } from './profile/profile.component';


export const ViewRestaurantRoutes: Routes = [
    { path: 'listpromos',      component:ListPromosComponent  },
    { path: 'newpromo',   component: NewPromoComponent },
    { path: 'profile',     component: ProfileComponent },

];