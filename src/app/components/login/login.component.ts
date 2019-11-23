import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { renderComponent } from '@angular/core/src/render3';

//service
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  loginForm: FormGroup;
  id_owner;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router,
    public navbarService: NavbarService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(response => {
        if (response.is_owner) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('id_owner', response.id);
          localStorage.setItem('usuario', 'owner');
          this.router.navigate(['/homeRestaurant']);
          this.navbarService.toggle('owner');//cambia el valor booleano para que el navbar se renderize
          location.reload();
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
