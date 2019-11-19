import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Route, Router } from '@angular/router';
import { InvitadoService } from 'src/app/services/invitado.service';
@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  estados=[];
  ciudades=[];
  estadoseleccionado:String;
  ciudadseleccionadad:String;
  houseservice = false;
  currentUser='';
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
    private router:Router,
    private invitedService:InvitadoService) { 
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
        user_id: [],
        restrictions:[''],
        is_active:[true],
      });


  }

  ngOnInit() {

    //Cargar lista de estados
    this.invitedService.getStates().subscribe( response =>{
      
      for (let index = 0; index < response.length; index++) {
        const element = response[index];  
        this.estados[index] = element.name
      }
    })
  }

  registrar() {
    this.registerForm.controls['city'].setValue(this.ciudadseleccionadad);
    this.adminService.restaurantRegister(this.registerForm.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/homeAdmin']);
        // this.renderer.addClass(this.modal.nativeElement, "is-active");
      }
    )
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

}
