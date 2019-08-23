import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }
  test(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.username);
  }
}
