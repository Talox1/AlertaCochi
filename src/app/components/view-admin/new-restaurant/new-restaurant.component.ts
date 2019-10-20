import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  estados;
  ciudades;

  houseservice = false;

  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService:AdminService,
    private router:Router) { 
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      facebook: [''],
      instagram: [''],
      whatsapp: [''],
      homeService: [false, [Validators.required]],
      address: ['', [Validators.required]],
      user_id: [],
    });

    this.estados = ['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades = ["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]

  }

  ngOnInit() {
  }

  registrar() {
    this.adminService.restaurantRegister(this.registerForm.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/homeAdmin']);
        // this.renderer.addClass(this.modal.nativeElement, "is-active");
      }
    )
  }

  
  setservice() {
    console.log(this.registerForm.value)
  }

}
