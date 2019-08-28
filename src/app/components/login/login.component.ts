import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Subscription, from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { renderComponent } from '@angular/core/src/render3';

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
    console.log("Logeando0");
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      // tslint:disable-next-line: no-unused-expression
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        // localStorage.setItem('is_consumer',response.is_consumer);
        // localStorage.setItem('is_casero',response.is_casero);
        //this.router.navigate(['/home']);
      },
      error => {
        console.log('status:' + error.status);
      }
    );
    localStorage.setItem('currentUser','restaurant');
    localStorage.setItem('isLoged','true');
    // location.reload();
    this.router.navigate(['/homeRestaurant']);
      
  }
}
