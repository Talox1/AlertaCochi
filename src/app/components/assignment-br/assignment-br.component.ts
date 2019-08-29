import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { CaseroService } from 'src/app/services/casero.service';
@Component({
  selector: 'app-assignment-br',
  templateUrl: './assignment-br.component.html',
  styleUrls: ['./assignment-br.component.css']
})
export class AssignmentBRComponent implements OnInit {

  negocios : any = [];
  restaurantes : any = [];

  //especific data Restaurant
 restaurantName:string;
 restaurantCity:string;
 restaurantHomeService:string;
 restaurantname:string;//
 restaurantId:number;
 restaurantSelect= false;

  //specific data Bussiness
  bussinessName:string;
  bussinessEmail:string;
  bussinessUsername:string;
  bussinessId:number;
  bussinessSelect=false;

  constructor(
    public adminservice:AdminService,
  ) {
    
   }

  ngOnInit() {
    console.log("on init")
    this.getAllBussiness();
    this.getAllRestaurants();
  }
  getAllBussiness(){
    console.log("all bussiness");
    this.adminservice.getRestaurants().subscribe(
      response=>{
        console.log(response);
        this.negocios = response;
      }
    )
  }
  
  getAllRestaurants(){
    let indice = 0;
    console.log("all restaurants");
    this.adminservice.getUsers().subscribe(
      response=>{
        console.log(response.length)
        for(let i = 0; i<response.length; i++){
          if(response[i].is_casero == true){
            console.log(response[i]);
            this.restaurantes[indice] =  response[i];
            indice++;
          }
        }

      }
    )
  }


  selectRestaurant(name:string){
    this.adminservice.restaurantsSearch(name).subscribe(
      response =>{
        console.log("restaurant ");
        this.restaurantName = response[0].name;
        this.restaurantCity = response[0].city;
        this.restaurantHomeService = response[0].homeService;
        this.restaurantId = response[0].id;
        this.restaurantSelect = true;
      }
    )
    // console.log(name);
  }
  selectBussiness(nameUser:string){
    this.adminservice.usersSearch(nameUser).subscribe(
      response=>{
        console.log(response[0].name);
        this.bussinessName = response[0].name;
        this.bussinessEmail = response[0].email;
        this.bussinessUsername = response[0].username;
        this.bussinessId = response[0].id;
        this.bussinessSelect = true;
      }
    )
    // console.log(id);
  }
  

  quitarRestaurant(){
    console.log("quitando restaurante");
    this.restaurantSelect = false;
  }
  quitarBussiness(){
    console.log("quitando bussiness");
    this.bussinessSelect = false;
  }
  handleClick($event){
    console.log("asdas");
  }

}
