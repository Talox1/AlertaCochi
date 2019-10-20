import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-register-promo',
  templateUrl: './register-promo.component.html',
  styleUrls: ['./register-promo.component.css']
})

export class RegisterPromoComponent implements OnInit {
  estados;
  ciudades;
  days;

  id_restaurant;

  registerForm: FormGroup;
  houseservice = true;
  constructor(
    public fb: FormBuilder,
    public adminService:AdminService,
    private route: ActivatedRoute,
    private router:Router,
  ) {
    this.id_restaurant = this.route.snapshot.paramMap.get('id');  

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"];
    this.days =["Lunes","Martes","Miercoles","Juevez","Viernes","Sabado","Domingo"];
   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      restaurant_id:[this.id_restaurant],
      name: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      numberReports: ['0'],
      likes: ['0'],
      availableDay: ['', [Validators.required] ],
      restrictions: ['', [Validators.required] ],
    });
  }
    onUploadFinish(event) {
    console.log(event);
   }
  setservice(){

    console.log(this.registerForm.value)
  }
  registarPromo(){
    console.log(this.registerForm.value);
    this.adminService.promotionsRegister(this.registerForm.value).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/homeAdmin'])
      }
    )
  }

  cancelar(){
    this.router.navigate(['/listRestaurants'])
  }

}
