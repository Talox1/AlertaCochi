import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Promotion } from 'src/app/models/promotion/promotion';

import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
@Component({
  selector: 'app-restaurat-promotions',
  templateUrl: './restaurat-promotions.component.html',
  styleUrls: ['./restaurat-promotions.component.css']
})
export class RestauratPromotionsComponent implements OnInit {

  @ViewChild("modal", { static: true }) modal: ElementRef;
  @ViewChild("editPromoModal", { static: true }) editPromoModal: ElementRef;

  editPromo:Promotion;
  promotions: any [];

  id_restaurant;
  promo_id;

  editForm: FormGroup;
  constructor(private ownerService: OwnerService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private fb: FormBuilder, 
    ) {

    this.id_restaurant = this.route.snapshot.paramMap.get('id');
    this.ownerService.getPromotionsId(this.id_restaurant).subscribe( 
      response =>{
        this.promotions = response;
        console.log(this.promotions)
        
      }
    );
   }

  ngOnInit() {
    this.editForm = this.fb.group({
      restaurant_id:[this.id_restaurant],
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

  openModalEdit(promotion:FormGroup){
    
    this.editForm = promotion;
    console.log(this.editForm);//promotion.id
    this.renderer.addClass(this.editPromoModal.nativeElement, "is-active");
  }

  openModal(id:number){ 
    this.renderer.addClass(this.modal.nativeElement, "is-active");
    this.promo_id = id;
    console.log('id de la promo',this.promo_id)
  }
  closeModal(){
    this.renderer.removeClass(this.modal.nativeElement, "is-active");
    this.toastr.info('Operacion Cancelada', 'No se hicieron cambios');
  }

  delete(){
    console.log('eliminando promo',this.promo_id);
    this.ownerService.promotionsDelete(this.promo_id).subscribe(
      response => {
        console.log(response);
        this.toastr.success('Operacion Exitosa', 'Producto eliminado');
        this.ngOnInit();
      },error =>{
        this.toastr.warning('Error !!!', 'Algo ah salido mal, no se hicieron cambios');
      }
    )


    this.renderer.removeClass(this.modal.nativeElement, "is-active");//cerar modal
  }

  update(promotion:Promotion){
    console.log(promotion)
  }
}
