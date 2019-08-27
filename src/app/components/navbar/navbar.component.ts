import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloged=true;//variable para cambiar los botones de login a logout
  wichUser='invited'; //variabe para controlar las opciones del navbar

  constructor() { }

  ngOnInit() {
  }

}
