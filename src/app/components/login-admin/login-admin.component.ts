import { Component, Output, EventEmitter, HostListener, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CanActivate, Router } from '@angular/router';//can activate para valida token


//login service
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from '../../services/navbar.service';
//navbar component
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email:string;
  password:string;

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router, 
    public loginService: LoginService,
    public navbarService: NavbarService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ],
   });
  }

 

  login(){
    this.loginService.login(this.loginForm.value).subscribe(
      // tslint:disable-next-line: no-unused-expression
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/homeAdmin']);
        this.navbarService.toggle();
      },
      error => {
        console.log('status:' + error.status);
        if (error.status == 401){
          //alert("Correo o contraseña inválidos");
          document.getElementById('error').innerHTML = 'Correo o contraseña inválidos';
          document.getElementById('error').className = 'notification is-danger';
        }
      }
    );
    // location.reload();
  }
}
