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
  @ViewChild("closeBtn", { static: true }) btn: ElementRef;//para cambiar el estilo del boton menu
  
  isloged=false;//variable para cambiar los botones de login a logout
  currentUser='invited'; //variabe para controlar las opciones del navbar
  status:boolean ;
  

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private renderer: Renderer2,
    public loginService: LoginService,
  ) { }

  ngOnInit() {

    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token') == null){
      this.isloged = false
    }else{
      this.isloged = true;
    }
    
    if(this.currentUser != 'invited' && this.currentUser != undefined){
      this.isloged = true;
    }else{  
      this.isloged = false;
    }

    //para renderizar el navbar
    this.navbarService.change.subscribe(response => {
      console.log('renderizando', response);
      this.currentUser = this.navbarService.getCurrentUser();
      console.log(this.currentUser);
      console.log(this.status)
      this.ngOnInit();
    });
    
  }

  logOut(){
    // this.loginService.logout().subscribe(
    //   response => {
      // console.log(response);
        
    //   },
    //   error => {
    //     console.log('status:' + error.status);
    //   }
    // );
    
    
    localStorage.removeItem('token')
    localStorage.removeItem('id_owner')
    // localStorage.setItem('currentUser','invited')
    // localStorage.setItem('isLoged','false')
    
    this.navbarService.toggle('invited');
    // this.isloged = this.navbarService.isLoged();
    // console.log(this.isloged);
    
    this.router.navigate(['/home']);
    this.ngOnInit();
    // location.reload();
  }

  //metodo para cerrar el navbar
  collapseNavbar(){
    this.renderer.removeClass(this.navbar.nativeElement, 'is-active');
    this.renderer.removeClass(this.btn.nativeElement, 'is-active');
  }

}
