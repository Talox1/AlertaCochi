import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id?: number;
  name: string;
  usename: string;
  email: string;

  profile = {
    name: null,
    usename: null,
    email: null,
  }

  constructor(public ownerService: OwnerService) { }

  ngOnInit() {
  }

}
