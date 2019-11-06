import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-consumer',
  templateUrl: './home-consumer.component.html',
  styleUrls: ['./home-consumer.component.css']
})
export class HomeConsumerComponent implements OnInit {

  promos: any [] = [
    {id: 0, name: "promo001", addres:"address001", service:true, month:"enero", date:'10', day:'lunes'},
    {id: 2, name: "promo002", addres:"address002", service:true, month:"enero", date:'11', day:'martes'},
    {id: 3, name: "promo003", addres:"address003", service:true, month:"enero", date:'12', day:'miercoles'},
    {id: 4, name: "promo004", addres:"address004", service:true, month:"enero", date:'13', day:'jueves'},
    {id: 5, name: "promo005", addres:"address005", service:true, month:"enero", date:'10,11,12', day:'lunes,martes,miercoles'}, 
];

  constructor() { }

  ngOnInit() {
    // this.ownerService.getPromotionsId(localStorage.getItem('id_restaurant')).subscribe(
    //   response => {

    //     this.promos = response;

    //   }
    // )
  }


  editar() {

  }

  eliminar() {

  }

}
