import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloged=false;//variable para cambiar los botones de login a logout
  wichUser='invited'; //variabe para controlar las opciones del navbar

  constructor() { }

  ngOnInit() {

    


    this.wichUser = localStorage.getItem('currentUser');
    // this.isloged = localStorage.getItem('isLoged');
    console.log(this.wichUser);
    if(localStorage.getItem('isLoged') == 'true'){
      this.isloged = true;
    }
  }

  logOut(){
    console.log("Haz cerrado sesion con exito!")
    localStorage.setItem('currentUser','invited')
    localStorage.setItem('isLoged','false')
    this.isloged = false;
    location.reload();
  }

}
