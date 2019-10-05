import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


//service 
import { NavbarService } from '../../services/navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloged=false;//variable para cambiar los botones de login a logout
  wichUser='invited'; //variabe para controlar las opciones del navbar

  

  constructor(
    private router: Router,
    private navbarService: NavbarService
  ) { }

  ngOnInit() {

    this.wichUser = localStorage.getItem('currentUser');
    
    console.log(this.wichUser);
    if(localStorage.getItem('isLoged') == 'true' && this.wichUser == 'admin'){
      this.isloged = true;
    }else if(localStorage.getItem('isLoged') == 'true' && this.wichUser == 'restaurant'){
      this.isloged = true;
    }else{
      this.router.navigate(['/home']);
    }
    this.navbarService.change.subscribe(isLoged => {
      this.ngOnInit();
    });
  }

  logOut(){
    
    localStorage.setItem('currentUser','invited')
    localStorage.setItem('isLoged','false')
    this.isloged = false;
    this.ngOnInit();
    this.router.navigate(['/home']);
    this.navbarService.isLoged = false;
    // location.reload();
  }

}
