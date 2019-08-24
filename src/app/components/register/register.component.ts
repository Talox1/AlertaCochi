import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  username:string;
  password:string;
  email:string;

  registerForm: FormGroup;

  constructor(public fb: FormBuilder,   public registerService: RegisterService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.email] ],
    });
   }

  ngOnInit() {

  }
  register(){
    this.registerService.register(this.registerForm.value).subscribe(
      // tslint:disable-next-line: no-unused-expression
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
      }
    );
  }
}
