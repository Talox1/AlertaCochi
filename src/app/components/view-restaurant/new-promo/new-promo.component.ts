import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-new-promo',
  templateUrl: './new-promo.component.html',
  styleUrls: ['./new-promo.component.css']
})
export class NewPromoComponent implements OnInit {

  estados;
  ciudades;
  days;

  registerForm: FormGroup;
  houseservice = true;

  constructor(public fb: FormBuilder, public ownerService: OwnerService) { 
    this.estados=['CHIAPAS', 'DURANGO', 'CDMX', 'TABASCO', 'OAXACA', 'TAMAULIPAS', 'MONTERREY', 'PUEBLA', 'GUADALAJARA', 'MORELIA'];
    this.ciudades=["Tuxtla", "DF", "VILLA HERMOSA", "OAXACA", "SALTILLO", "PUEBLA", "MICHOACAN"];
    this.days =["Lunes","Martes","Miercoles","Juevez","Viernes","Sabado","Domingo"];
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      restaurant_id:[localStorage.getItem('id_restaurant')],
      name: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      numberReports: ['0'],
      likes: ['0'],
      // houseservice: [Boolean , [Validators.required] ],
      // estado: ['', [Validators.required] ],
      // ciudad: ['', [Validators.required] ],
      availableDay: ['', [Validators.required] ],
      restriction: ['', [Validators.required] ],
    });
  }

  onUploadFinish(event) {
    console.log(event);
   }
  setservice(){
  console.log(this.registerForm.value)
  }
  registarPromo(){
    console.log(this.registerForm.value);
    this.ownerService.promotionsRegister(this.registerForm.value).subscribe(
      response =>{
        console.log(response);

      }
    )
  }  

}
