import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Promotion } from 'src/app/models/promotion/promotion';

@Component({
  selector: 'app-restaurat-promotions',
  templateUrl: './restaurat-promotions.component.html',
  styleUrls: ['./restaurat-promotions.component.css']
})
export class RestauratPromotionsComponent implements OnInit {
  promotions: any [];
  promoname:string;
  id_restaurant;
  promo_id;
  editForm: FormGroup;
  days;
  @ViewChild("modal", { static: true }) modal: ElementRef;
  @ViewChild("editPromoModal", { static: true }) editPromoModal: ElementRef;

  constructor(private ownerService: OwnerService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private renderer: Renderer2,
    private fb: FormBuilder ) {

    this.id_restaurant = this.route.snapshot.paramMap.get('id');
    this.ownerService.getPromotionsId(this.id_restaurant).subscribe( 
      response =>{
        this.promotions = response;
        console.log(this.promotions)
      }
    );
    
    this.days =["Lunes","Martes","Miercoles","Juevez","Viernes","Sabado","Domingo"];
   }

  ngOnInit() {
    this.editForm = this.fb.group({
      restaurant_id:[this.id_restaurant],
      name: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      availableDay: ['', [Validators.required] ],
      restrictions: ['', [Validators.required] ],

     
    }); 
    
  }

  openModalEdit(promotion:Promotion){
    
    this.promo_id = promotion.id;
    console.log(this.promo_id);//promotion.id
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

  update(){
    this.ownerService.promotionsUpdate(this.promo_id,this.editForm.value ).subscribe(
      response =>{
        console.log('Dato actualizado, Response',response )
        this.renderer.removeClass(this.editPromoModal.nativeElement, "is-active");
        this.toastr.success('Dato actualizado','con exito');
        this.ngOnInit();
      }
    )
  }

  onUploadFinish(event) {
    console.log(event);
   }
}
