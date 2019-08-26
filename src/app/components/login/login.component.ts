import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  loginForm: FormGroup;

  constructor(public fb: FormBuilder,  public loginService: LoginService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ],
   });
  }

  ngOnInit() {

  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      // tslint:disable-next-line: no-unused-expression
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        //this.router.navigate(['/home']);
      }
    );
  }
  test(){
    console.log(this.loginForm.value);
  }

}
