import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloged=false;//variable para cambiar los botones de login a logout
  wichUser='invited'; //variabe para controlar las opciones del navbar

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    


    this.wichUser = localStorage.getItem('currentUser');
    
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
    this.router.navigate(['/home']);
    // location.reload();
  }

}
