import { Component, OnInit } from '@angular/core';
import { InvitadoService } from 'src/app/services/invitado.service';
import { Promotion } from 'src/app/models/promotion/promotion';

@Component({
  selector: 'app-home-consumer',
  templateUrl: './home-consumer.component.html',
  styleUrls: ['./home-consumer.component.css']
})
export class HomeConsumerComponent implements OnInit {
  promos: any [];
  listPromotion:Promotion[];
  selectedDay;
  days: any[];
  
  estados=[];
  ciudades=[];
  estadoseleccionado:String;
  ciudadseleccionadad:String;
  urls:any [];
  restaurants: any[];

  constructor(private invitedService:InvitadoService) { 
    this.invitedService.getPromotions().subscribe(response =>{
      console.log(response)
      this.promos = response
    })
  }

  ngOnInit() {
    // console.log('lista de urls',this.urls)

    this.days =["Lunes","Martes","Miercoles","Juevez","Viernes","Sabado","Domingo","Cualquier Dia"];

    // /Cargar lista de estados
    this.invitedService.getStates().subscribe( response =>{
      
      for (let index = 0; index < response.length; index++) {
        const element = response[index];  
        this.estados[index] = element.name
      }
    })
  }


  editar() {
  }

  eliminar() {

  }

  fiterDay(){
    var i = 0;
    this.promos =[];
    this.invitedService.getPromotions().subscribe(response =>{
      console.log(response);
      if(this.selectedDay ==='Cualquier dia'){
        this.promos = response;
        this.ngOnInit();
      }else{
        for (let index = 0; index < response.length; index++) {
          const element = response[index];
          if(element.availableDay === this.selectedDay){
            this.promos[i] = element;
            console.log('hola?',this.promos[i]);
            i++;
          }
        }
      }
    })
    console.log(this.promos)
    
  }


  getPromosByState(){
    console.log(this.estadoseleccionado)
    
    this.invitedService.getStates().subscribe( response =>{
      for (let index = 0; index < response.length; index++) {
        const element = response[index];  
        if(this.estadoseleccionado===element.name ){

          this.ciudades = element.citys;

          for (let j = 0; j < this.ciudades.length; j++) {
            const element2 = this.ciudades[j];
            this.ciudades[j] = element2.name;
          }
        }
      }
    })
  }

}
