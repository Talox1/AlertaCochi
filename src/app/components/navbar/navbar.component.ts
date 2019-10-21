import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

//service 
import { NavbarService } from '../../services/navbar.service'
import { OwnerService } from 'src/app/services/owner.service';
import { AdminService } from 'src/app/services/admin.service';

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
    if (localStorage.getItem('usuario') == 'owner') {
      console.log('owner service in')
      this.ownerService.ownerProfile().subscribe(
        response => {
          this.userData = response;
          this.currentUser = 'owner'
          this.isloged = true;
        }
      )
    } else if (localStorage.getItem('usuario') == 'admin') {
      this.adminService.adminProfile().subscribe(
        response => {
          this.userData = response;
          this.currentUser = 'admin'
          this.isloged = true;
          console.log('admin service in')
        }
      )
    }


  }

  ngOnInit() {
    //para renderizar el navbar
    this.navbarService.change.subscribe(
      response => {
        this.currentUser = this.navbarService.currentUser;
        this.currentUser = this.navbarService.currentUser;
        console.log('cambio')
        this.ngOnInit();
      });

    // if (localStorage.getItem('token') == null) {
    //   this.isloged = false
    // } else {
    //   this.isloged = true;
    // }
  }




  logOut() {

    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    localStorage.removeItem('id_owner')

    this.isloged = false;
    this.navbarService.toggle('invited');

    this.router.navigate(['/home']);
    this.ngOnInit();
  }

  //metodo para cerrar el navbar
  collapseNavbar() {
    this.renderer.removeClass(this.navbar.nativeElement, 'is-active');
    this.renderer.removeClass(this.btn.nativeElement, 'is-active');
  }

}
