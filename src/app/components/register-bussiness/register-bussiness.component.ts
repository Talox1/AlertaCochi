import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from 'src/app/services/admin.service';
import { OwnerService } from 'src/app/services/owner.service';
import { InvitadoService } from 'src/app/services/invitado.service';
@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {
  @ViewChild("modalcito", { static: true }) modal: ElementRef;
  estados=[];
  ciudades=[];
  estadoseleccionado:String;
  ciudadseleccionadad:String;

  id_owner;

  registerForm: FormGroup;
  houseservice = true;

  currentUser;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private adminService:AdminService,
    private ownerService:OwnerService,
    private route: ActivatedRoute,
    private invitedService:InvitadoService,
    

  ) {
    this.id_owner = this.route.snapshot.paramMap.get('id');  

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      facebook: [''],
      instagram: [''],
      whatsapp: [''],
      homeService: [false, [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      user_id: [this.id_owner],
      restrictions:[''],
      is_active:[true],
    });

    if(localStorage.getItem('usuario') == 'admin'){
      this.adminService.adminProfile().subscribe(
        response =>{
          this.estados = response;
          console.log(response)
        }
      )
    }else{
      this.ownerService.ownerProfile().subscribe(
        response =>{
          console.log(response);
        }
      )
    }
  }

  ngOnInit() {
    if(localStorage.getItem('usuario') == 'owner'){
      this.ownerService.ownerProfile().subscribe(response => {
          this.currentUser = 'owner'
          console.log(this.currentUser)
        })
    }else{
      this.adminService.adminProfile().subscribe( response => {
          this.currentUser = 'admin'
        })
    }


    //Cargar lista de estados
    this.invitedService.getStates().subscribe( response =>{
      
      for (let index = 0; index < response.length; index++) {
        const element = response[index];  
        this.estados[index] = element.name
      }
    })
    
  }

  registrar() {
    console.log("hellodah");
    console.log(this.currentUser)

    
    this.registerForm.controls['city'].setValue(this.ciudadseleccionadad);
    console.log(this.registerForm);
    if (this.currentUser == 'admin') {

      this.adminService.restaurantRegister(this.registerForm.value).subscribe(
        response => {
          console.log(response);
          // this.renderer.addClass(this.modal.nativeElement, "is-active");
        }
      )
    } else if (this.currentUser == 'owner') {
      console.log('agregando restauratn siendo owner')
      this.ownerService.restaurantsRegister(this.registerForm.value).subscribe(
        response => {
          console.log(response);
          localStorage.setItem('firstime', 'true')
          localStorage.setItem('id_restaurant', response.id);
          this.router.navigate(['/homeRestaurant']);
        }
      )
    }
  }

  getCities(){
    console.log(this.estadoseleccionado)
    this.registerForm.controls['state'].setValue(this.estadoseleccionado);
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

  setservice() {
    console.log(this.registerForm.value)
  }
  logeando() {
    console.log("Logeando");
  }
}