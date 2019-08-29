import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CaseroService } from 'src/app/services/casero.service';
@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  constructor(
    public adminservice:AdminService,
    public bussinesService:AdminService,
  ) { }

  ngOnInit() {
    //listarNegocios
    
    
  }

  
}
