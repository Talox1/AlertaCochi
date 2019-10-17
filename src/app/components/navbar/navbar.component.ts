import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

//service 
import { NavbarService } from '../../services/navbar.service'
import { LoginService } from 'src/app/services/login.service';
import { OwnerService } from 'src/app/services/owner.service';
import { identifierModuleUrl } from '@angular/compiler';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navbarCollapse", { static: true }) navbar: ElementRef;//para controlar mostrar y ocultar navbar
  @ViewChild("closeBtn", { static: true }) btn: ElementRef;//para cambiar el estilo del boton menu

  isloged = false;//variable para cambiar los botones de login a logout
  currentUser = 'invited'; //variabe para controlar las opciones del navbar
  userData; //datos del usuario que esta logueado


  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private renderer: Renderer2,
    private ownerService: OwnerService,
    private adminService: AdminService

  ) {
    console.log('Construnctor');
    if(!this.isloged){
      console.log('intentadno logearse')
      this.ownerService.ownerProfile().subscribe(
        response => {
          this.userData = response.is_owner;
          this.isloged = true;
          this.currentUser = 'owner';
        }
      )
  
       this.adminService.adminProfile().subscribe(
        response =>{
          this.userData = response.is_admin;
          this.isloged = true;
          this.currentUser = 'admin';
          console.log(this,this.isloged, this.currentUser )
        }
       )
    }
  }

  ngOnInit() {
    this.navbarService.change.subscribe(response => {
      console.log(response)
      this.currentUser = this.navbarService.getCurrentUser();
      this.ngOnInit();
    });

  }
  logOut() {

    localStorage.removeItem('token')
    localStorage.removeItem('id_owner')
    this.navbarService.toggle();
    this.isloged = false;
    this.currentUser = 'invited'
    this.router.navigate(['/home']);
    this.ngOnInit();
  }

  //metodo para cerrar el navbar
  collapseNavbar() {
    this.renderer.removeClass(this.navbar.nativeElement, 'is-active');
    this.renderer.removeClass(this.btn.nativeElement, 'is-active');
  }

}
