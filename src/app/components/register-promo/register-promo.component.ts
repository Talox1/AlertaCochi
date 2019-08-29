import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { CaseroService } from 'src/app/services/casero.service';
@Component({
  selector: 'app-register-promo',
  templateUrl: './register-promo.component.html',
  styleUrls: ['./register-promo.component.css']
})

export class RegisterPromoComponent implements OnInit {
  estados;
  ciudades;
  days;

  registerForm: FormGroup;
  houseservice = true;
  constructor(
    public fb: FormBuilder,
    public caseroservice:CaseroService,
  ) {
    this.registerForm = this.fb.group({
      restaurant_id:[],
      name: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      numberReports: [0],
      likes: [0],
      // houseservice: [Boolean , [Validators.required] ],
      // estado: ['', [Validators.required] ],
      // ciudad: ['', [Validators.required] ],
      availableDay: ['', [Validators.required] ],
      restriction: ['', [Validators.required] ],
      image_url:[File,],
      image_url_id:[],
    });

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"];
    this.days =["Lunes","Martes","Miercoles","Juevez","Viernes","Sabado","Domingo"];
   }

  ngOnInit() {
  }
    onUploadFinish(event) {
    console.log(event);
   }
  setservice(){
  console.log(this.registerForm.value)
  }
  registarPromo(){
    this.caseroservice.promotionsRegister(this.registerForm.value).subscribe(
      response =>{
        console.log(response);

      }
    )
  }  
}
