import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
