import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { AdminService } from 'src/app/services/admin.service';
import { CaseroService } from 'src/app/services/casero.service';

@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {
  @ViewChild("modalcito") modal: ElementRef;
  estados;
  ciudades;
  selectState: string  = '0';
  state: string        = '';
  selectCity:string = '0';
  city:string = '';

  registerForm: FormGroup;
  houseservice = true;

  currentUser;
  constructor(
    public fb: FormBuilder,
    public adminservice:AdminService,
    public caseroService:CaseroService,
    private renderer: Renderer2,
    ) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      facebook: [''],
      instagram:[''],
      whatsapp:[''],
      homeService: [false , [Validators.required] ],
      restrictions: [''],
      state: ['', [Validators.required] ],
      city: ['', [Validators.required] ],
    });

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]
   }

  ngOnInit() {
    console.log(this.registerForm.value)
    this.currentUser = localStorage.getItem('currentUser');
    console.log(this.currentUser);
  }

  registrar(){
    console.log("hellodah");
    if(this.currentUser =='admin'){
      console.log('Admin');
      this.adminservice.restaurantRegister(this.registerForm.value).subscribe(
        response =>{
          localStorage.setItem('currentUser','admin');
          localStorage.setItem('isLoged', 'true');
          console.log(response);
          localStorage.setItem('token', response.token);
          //this.renderer.addClass(this.modal.nativeElement, "is-active");
        }, 
        error => {
          console.log(error.status)
        }
      )
    }else if(this.currentUser =='restaurant'){
      console.log('Restaurant');
      this.caseroService.restaurantsRegister(this.registerForm.value).subscribe(
        response => {
          localStorage.setItem('currentUser','restaurant');
          localStorage.setItem('isLoged','true');
          console.log(response);
          localStorage.setItem('token', response.token);
          this.renderer.addClass(this.modal.nativeElement, "is-active");
        },
        error => {
          console.log(error.status)
        }
      )
      
    }
  }

  setservice(){
    console.log(this.registerForm.value)
  }
  logeando(){
    console.log("Logeando");
  }
}