import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core'
@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {
  estados;
  ciudades;
  selectState: string  = '0';
  state: string        = '';
  selectCity:string = '0';
  city:string = '';


  registerForm: FormGroup;
  houseservice = true;
  constructor(
    public fb: FormBuilder
    ) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      houseservice: [Boolean , [Validators.required] ],
      address: ['', [Validators.required] ],
      estado: ['', [Validators.required] ],
      ciudad: ['', [Validators.required] ],
    });

    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]
   }

  ngOnInit() {
    console.log(this.registerForm.value)
  }

  test(){
    console.log("hellodah");
    console.log(this.registerForm.value);
  }

  setservice(){
    console.log(this.registerForm.value)
  }
}