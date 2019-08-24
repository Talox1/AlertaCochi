import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, CheckboxRequiredValidator} from '@angular/forms';
@Component({
  selector: 'app-register-bussiness',
  templateUrl: './register-bussiness.component.html',
  styleUrls: ['./register-bussiness.component.css']
})
export class RegisterBussinessComponent implements OnInit {


  check1;
  check2;
  registerBussinessForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.registerBussinessForm = this.fb.group({
      name: ['a', [Validators.required]],
      phone: ['b', [Validators.required]],
      category: ['v', [Validators.required]],
      houseservice: ['a', [Validators.required, Validators.email] ],
      address: ['a', [Validators.required, Validators.email] ],
    });
   }

  ngOnInit() {
  }

  test(){
    console.log("hellodah");
    console.log(this.registerBussinessForm.value);
  }
  
}
