import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, CheckboxRequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {

  registerBussinessForm: FormGroup;
  activo = true;
  constructor(public fb: FormBuilder) {
    this.registerBussinessForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      category: ['', [Validators.required]],
      houseservice: ['', [Validators.required, Validators.email] ],
      address: ['', [Validators.required] ],
    });
   }

  ngOnInit() {
    
  }

  test(){
    console.log("hellodah");
    console.log(this.registerBussinessForm.value);
  }

}