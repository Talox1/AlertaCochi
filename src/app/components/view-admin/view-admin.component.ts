import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OwnerService } from 'src/app/services/owner.service';
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
