import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurat-promotions',
  templateUrl: './restaurat-promotions.component.html',
  styleUrls: ['./restaurat-promotions.component.css']
})
export class RestauratPromotionsComponent implements OnInit {
  promotions: any [];
  id_restaurant;
  constructor(private ownerService: OwnerService,
    private route: ActivatedRoute,) {

    this.id_restaurant = this.route.snapshot.paramMap.get('id');
    this.ownerService.getPromotionsId(this.id_restaurant).subscribe( 
      response =>{
        this.promotions = response;
        console.log(this.promotions)
      }
    );
   }

  ngOnInit() {
    
  }

}
