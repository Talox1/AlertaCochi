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
    });

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]
   }

  ngOnInit() {
  }
  onUploadFinish(event) {
    console.log(event.path);
   }
   handleClick(data:string){
    console.log(data);
  }  
}
