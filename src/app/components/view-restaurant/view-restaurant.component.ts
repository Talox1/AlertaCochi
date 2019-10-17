import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { Restaurant } from '../../models/restaurant/restaurant'


@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {
  
  restaurants:Restaurant[] =[];
  constructor(private router: Router,
    private ownerService: OwnerService) {
    //servicio que obtiene todos los restaurantes
    this.ownerService.getRestaurants().subscribe( 
      response =>{
        this.restaurants = response;
        console.log(this.restaurants);
      }
    );
   }

  ngOnInit() {
    
    
    if(localStorage.getItem('firstime') == 'true'){
      this.router.navigate(['/registerBussiness']);
    }
  }

}
