import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CanActivate, Router } from '@angular/router';//can activate para valida token
import { Injectable } from '@angular/core';
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
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required] ],
   });
  }

  login(){
   
    console.log(this.loginForm.value);
    localStorage.setItem('currentUser','admin');
    // console.log(localStorage.getItem('currentUser'));
    localStorage.setItem('isLoged', 'true')
    
    // location.reload();
    this.router.navigate(['/homeAdmin']);


    // error => {
    //   console.log('status:' + error.status);
    //   if (error.status == 401){
    //     //alert("Correo o contraseña inválidos");
    //     document.getElementById('error').innerHTML = 'Correo o contraseña inválidos';
    //     document.getElementById('error').className = 'notification is-danger';
    //   }
  }
}
