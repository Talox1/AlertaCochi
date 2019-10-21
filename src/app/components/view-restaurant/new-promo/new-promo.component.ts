import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  estados;
  ciudades;
  days;
  id_restaurant;
  registerForm: FormGroup;
  houseservice = true;
  restaurants: any[];
  image: string | ArrayBuffer;

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
        console.log(response);
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

    
    this.ownerService.sendImage(this.imagen.image).subscribe(response =>{
      console.log(response);
    })
   }

  //  sendImage(){    
  //     if(this.imagen != null){
  //       console.log('send image');
  //       this.http.post('http://localhost:3000/upload', {
  //         file: this.imagen.image,
  //         name: this.imagen.name
  //       }).subscribe((d) => {
  //         console.log(d);
  //       })
  //     }
  //   }

  // selectImage(event) {
    
  //   let elem = event.target;
  //   if (elem.files.length > 0) {
  //     let formData = new FormData();
  //     formData.append('file', elem.files[0], elem.files[0].name)
  //     this.ownerService.sendImage((formData).subscribe(response => {
  //       console.log(response);
  //     })
  //   }
  



  
}
class ImageSelected {
  public name: String;
  public image: File;
}