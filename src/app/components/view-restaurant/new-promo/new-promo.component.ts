import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagenCloud } from '../../../models/promotion/promotion'
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';



@Component({
  selector: 'app-new-promo',
  templateUrl: './new-promo.component.html',
  styleUrls: ['./new-promo.component.css']
})
export class NewPromoComponent implements OnInit {


  images;
  multipleImages = [];

  fileData: File = null;
  
  imagn2:ImagenCloud;


  estados;
  ciudades;
  days;
  id_restaurant;
  registerForm: FormGroup;
  houseservice = true;
  restaurants: any[];
  image: string | ArrayBuffer;

  promtion_id;

  constructor(private fb: FormBuilder,
    private ownerService: OwnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.id_restaurant = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.estados = ['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades = ["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"];
    this.days = ["Lunes", "Martes", "Miercoles", "Juevez", "Viernes", "Sabado", "Domingo"];


    this.registerForm = this.fb.group({
      restaurant_id: [this.id_restaurant],
      name: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      availableDay: ['', [Validators.required]],
      restrictions: ['', [Validators.required]],


    });
    // this.route.params.subscribe(params => {
    //   if (params['id'] != null) {
    //       this.id_owner = +params['id'];
    //   }
    // });
  }

  setservice() {
    console.log(this.registerForm.value)
  }
  registarPromo() {
    console.log(this.registerForm.value);
    this.ownerService.promotionsRegister(this.registerForm.value).subscribe(
      response => {
        
        this.ownerService.sendImage(this.imagen.image,response.id).subscribe(response =>{
          console.log(response);
        })
        this.router.navigate(['/homeRestaurant'])
      }
    )
    
    
  }


  //=================APARTADOS PARA IMAGENES//=================

  private imagen:ImageSelected =  null;

  onUploadFinish(event) {
    console.log(event);
    this.imagen = new ImageSelected;
    this.imagen.image = <File>event.file;
    this.imagen.name = event.file.name;
    
    console.log(this.imagen.image);
    
   }

  
}
class ImageSelected {
  public name: String;
  public image: File;
}