import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-promo',
  templateUrl: './new-promo.component.html',
  styleUrls: ['./new-promo.component.css']
})
export class NewPromoComponent implements OnInit {


  images;
  multipleImages = [];


  estados;
  ciudades;
  days;
  id_restaurant;
  registerForm: FormGroup;
  houseservice = true;
  restaurants: any[];

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


  selectImage(event) {
    //opcion1
    let elem = event.target;
    if (elem.files.length > 0) {
      let formData = new FormData();
      formData.append('file', elem.files[0], elem.files[0].name)
      this.ownerService.sendImage(JSON.stringify(formData)).subscribe(response => {
        console.log(response);
      })
    }

    //opcion 2
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.images = file.name;
      console.log(this.images)
      //metodo del servicio
      // this.subirImagenes();
    }

  }

  subirImagenes() {
    console.log('subiendo imagenes')
    const formData = new FormData();
    formData.append('image', this.images);
    this.ownerService.sendImage(JSON.stringify(this.images)).subscribe(response => {
      console.log(response);
    })
  }

}
