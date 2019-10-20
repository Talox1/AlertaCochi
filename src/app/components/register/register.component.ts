import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { ViewChild, ElementRef } from '@angular/core'
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("modalcito", { static: true }) modal: ElementRef;
  registerForm: FormGroup;
  loginForm: FormGroup;
  currentUser;

  constructor(
    public fb: FormBuilder, 
    public adminService: AdminService,
    public registerService:RegisterService,
    public loginService:LoginService,
    private renderer: Renderer2,
    private router: Router) {
    
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      is_admin:[],
      is_consumer:[],
      is_owner:[true]
    });
    this.currentUser = localStorage.getItem('usuario');
    

    
   }

  ngOnInit() {
    this.currentUser = localStorage.getItem('usuario');

    if(this.currentUser == 'invited'){
      this.registerForm = this.fb.group({
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]], 
        is_owner:[true]
      });
    }
  }

  register(){
    console.log(this.currentUser);
    if(this.currentUser == 'admin'){//si es admin ejecuta este servicio
      this.adminService.usersRegister(this.registerForm.value).subscribe(
        response =>{
          console.log(response)
          // this.renderer.addClass(this.modal.nativeElement, "is-active");
          this.router.navigate(['/homeAdmin']);
        }
      )

    }else{//si no se va a este servicio
        this.registerService.register(JSON.stringify(this.registerForm.value)).subscribe(
          response =>{
            console.log(response);
            // localStorage.setItem('id_owner', response.id);
            // localStorage.setItem('currentUser','invited');
            // localStorage.setItem('firstime','true');
            this.router.navigate(['/loginRestaurant']);
          }
        )
      }
  }
}
