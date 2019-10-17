import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant/restaurant';
@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {
  restaurants: any [];
  editForm: FormGroup;
  id_restaurant;
  estados;
  ciudades;

  @ViewChild("modal", { static: true }) modal: ElementRef;
  @ViewChild("editRestaurantModal", { static: true }) editRestaurantModal: ElementRef;
  constructor(private router: Router,
    private ownerService: OwnerService,
    private renderer: Renderer2,
    public fb: FormBuilder,) {
    
      this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
      this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"]
   }

  ngOnInit() {
    if(localStorage.getItem('firstime') == 'true'){
      this.router.navigate(['/registerBussiness']);
    }

    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      
      email: ['', [Validators.required, Validators.email] ],
      facebook: [''],
      instagram:[''],
      whatsapp:[''],
      homeService: [true , [Validators.required] ],
      state: ['', [Validators.required] ],
      city: ['', [Validators.required] ],
      user_id:[localStorage.getItem('id_owner')],
    });



    //servicio que obtiene todos los restaurantes
    this.ownerService.getRestaurants().subscribe( 
      response =>{
        this.restaurants = response;
        console.log(this.restaurants)
      }
    )
  }

  openEditModal(restaurant:Restaurant){
    this.id_restaurant = restaurant.id
    this.renderer.addClass(this.editRestaurantModal.nativeElement, "is-active");
  }
  closeEditModal(){
    this.renderer.removeClass(this.editRestaurantModal.nativeElement, "is-active");
  }

  edit(){
    this.ownerService.restaurantsUpdate(this.id_restaurant, this.editForm.value).subscribe(
      response =>{
        console.log(response);
        this.router.navigate['/homeRestaurant'];
      }
    )
  }







  setservice(){
    console.log(this.editForm.value)
  }
}
