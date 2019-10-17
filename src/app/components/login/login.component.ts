import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription, from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
// import { renderComponent } from '@angular/core/src/render3';

//service
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from '../../services/navbar.service';
//navbar component
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  id_owner;
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,  
    public loginService: LoginService,
    private router: Router,
    public navbarService: NavbarService) {
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
        console.log(response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('id_owner',response.id);
        // this.navbarService.toggle('owner');//cambia el valor booleano para que el navbar se renderize
        this.router.navigate(['/homeRestaurant']);
      },
      error => {
        console.log('status:' + error.status);
        if (error.status == 401){
          
          document.getElementById('error').innerHTML = 'Correo o contraseña inválidos';
          document.getElementById('error').className = 'notification is-danger';
        }
      }
    );
  }
}
