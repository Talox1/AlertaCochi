import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  username:string;
  password:string;

  loginForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required] ],
   });
  }

  test(){
    console.log(this.loginForm.value);
    localStorage.setItem('currentUser','admin');
    // console.log(localStorage.getItem('currentUser'));
    localStorage.setItem('isLoged', 'true')
    // location.reload();
  }
}
