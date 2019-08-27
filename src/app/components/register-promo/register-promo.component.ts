import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

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
    public fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      houseservice: [Boolean , [Validators.required] ],
      estado: ['', [Validators.required] ],
      ciudad: ['', [Validators.required] ],
      day: ['', [Validators.required] ],
      restriccion: ['', [Validators.required] ],
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
   handleClick(data:string){
    console.log(data);
  }  
}
