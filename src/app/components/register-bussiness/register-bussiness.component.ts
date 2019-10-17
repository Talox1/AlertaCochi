import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ViewChild, ElementRef, Renderer2 } from '@angular/core'
import { AdminService } from 'src/app/services/admin.service';
import { OwnerService } from 'src/app/services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {
  @ViewChild("modalcito", { static: true }) modal: ElementRef;
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
    public ownerService:OwnerService,
    private renderer: Renderer2,
    private router: Router,
    ) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      // phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email] ],
      facebook: [''],
      instagram:[''],
      whatsapp:[''],
      homeService: [false , [Validators.required] ],
      // address: ['', [Validators.required] ],
      restrictions: [''],
      state: ['', [Validators.required] ],
      city: ['', [Validators.required] ],
      user_id:[localStorage.getItem('id_owner')],
    });

    

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]

   
   }

  ngOnInit() {
    console.log(this.registerForm.value)
    this.ownerService.ownerProfile().subscribe(
      response =>{
        this.currentUser = 'owner'
        console.log(this.currentUser)
      },
      error => {
      }
    )
    this.adminservice.adminProfile().subscribe(
      response =>{
        this.currentUser = 'admin'
      },
      error => {
      }
    )


    if(localStorage.getItem('firstime') == 'true'){
      this.registerForm = this.fb.group({
        name: ['', [Validators.required]],
        // phone: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email] ],
        facebook: [''],
        instagram:[''],
        whatsapp:[''],
        homeService: [false , [Validators.required] ],
        // address: ['', [Validators.required] ],
        restrictions: [''],
        state: ['', [Validators.required] ],
        city: ['', [Validators.required] ],
        user_id:[localStorage.getItem('id_owner')],
      });
    }
  }

  registrar(){
    console.log("hellodah");
    console.log(this.currentUser)
    if(this.currentUser =='admin'){
      this.adminservice.restaurantRegister(this.registerForm.value).subscribe(
        response =>{
          console.log(response);
          this.renderer.addClass(this.modal.nativeElement, "is-active");
        }
      )
    }else if(this.currentUser =='owner'){
      this.ownerService.restaurantsRegister(this.registerForm.value).subscribe(
        response =>{
          console.log(response);
          localStorage.setItem('firstime', 'true')
          localStorage.setItem('id_restaurant', response.id);
          this.router.navigate(['/homeRestaurant']);
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