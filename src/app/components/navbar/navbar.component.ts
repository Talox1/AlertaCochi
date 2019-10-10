import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef,Renderer2 } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

//service 
import { NavbarService } from '../../services/navbar.service'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navbarCollapse", { static: true }) navbar: ElementRef;//para controlar mostrar y ocultar navbar
  @ViewChild("closeBtn", { static: true }) btn: ElementRef;//para controlar mostrar y ocultar navbar
  
  isloged=false;//variable para cambiar los botones de login a logout
  wichUser='invited'; //variabe para controlar las opciones del navbar

  

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private renderer: Renderer2,
    public loginService: LoginService,
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
    this.loginService.logout().subscribe(
      response => {
        console.log(response);
        localStorage.removeItem('token')
        localStorage.setItem('currentUser','invited')
        localStorage.setItem('isLoged','false')
        this.isloged = false;
        this.ngOnInit();
        this.router.navigate(['/home']);
        this.navbarService.isLoged = false;
      },
      error => {
        console.log('status:' + error.status);
      }
    );
    

    // location.reload();
  }

  //metodo para cerrar el navbar
  collapseNavbar(){
    this.renderer.removeClass(this.navbar.nativeElement, 'is-active');
    this.renderer.removeClass(this.btn.nativeElement, 'is-active');
  }

}
