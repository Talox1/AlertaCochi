import { Component, Output, EventEmitter, HostListener, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';//can activate para valida token


//login service
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email: string;
  password: string;

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router,
    public navbarService: NavbarService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }



  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      response => {
        if (response.is_admin) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/homeAdmin']);
          localStorage.setItem('usuario', 'admin');
          this.navbarService.toggle('admin');
        } else {
          document.getElementById('error').innerHTML = 'Correo o contraseña inválidos';
          document.getElementById('error').className = 'notification is-danger';
        }


      },
      error => {
        if (error.status == 401) {
          document.getElementById('error').innerHTML = 'Correo o contraseña inválidos';
          document.getElementById('error').className = 'notification is-danger';
        }
      }
    );
  }
}
