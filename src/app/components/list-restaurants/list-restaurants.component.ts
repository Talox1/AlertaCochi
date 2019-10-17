import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  negocios: any = [];

  //specific data Restaurants
  restaurantName: string;
  restaurantCity: string;
  restaurantState: string;
  restaurantname: string;//
  restaurantId: number;

  estados;
  ciudades;

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit() {
    this.estados = ['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades = ["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"];
    this.getAllBussiness();
  }

  getAllBussiness() {
    this.adminService.getRestaurants().subscribe(
      response=> {

        this.negocios = response;
      }
      
    )
    console.log('Hi');
  }

  searchBussiness() {
    console.log('En proceso...');
  }

}
