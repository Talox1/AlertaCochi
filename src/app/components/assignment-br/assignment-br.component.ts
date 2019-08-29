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

  constructor(
    public adminservice:AdminService,
    public bussinesService:AdminService,
  ) {
    
   }

  ngOnInit() {
    console.log("on init")
    this.getAllBussiness();
    this.getAllRestaurants();
  }
  getAllBussiness(){
    console.log("all bussiness");
    this.bussinesService.getRestaurants().subscribe(
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
  

}
