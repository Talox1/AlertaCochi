import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-assignment-br',
  templateUrl: './assignment-br.component.html',
  styleUrls: ['./assignment-br.component.css']
})
export class AssignmentBRComponent implements OnInit {
  @ViewChild("modalcito", { static: true }) modal: ElementRef;
  negocios : any = [];
  propietarios : any = [];

  //especific data Restaurant
 restaurantName:string;
 restaurantCity:string;
 restaurantHomeService:string;
 restaurantname:string;//
 restaurantId:number;
 restaurantSelect= false;

  //specific data Bussiness
  bussinessName:string;
  bussinessEmail:string;
  bussinessUsername:string;
  bussinessId:number;
  bussinessSelect=false;

  registerForm: FormGroup;

  filtro = '';
  filtro2 = '';
  

  constructor(
    public adminservice:AdminService,
    public fb: FormBuilder,
    private renderer: Renderer2
  ) {
    
   }

  ngOnInit() {
    // console.log("on init")
    this.getAllBussiness();
    this.getAllOwners();
  }
  //obtiene todos los Restaurantes
  getAllBussiness(){
    // console.log("all bussiness");
    this.adminservice.getRestaurants().subscribe(
      response=>{
        console.log('Lista de restaurantes:',response);
        this.negocios = response;
      }
    )
  }
  //obtiene todos los propietarios
  getAllOwners(){
    let indice = 0;
    // console.log("all restaurants");
    this.adminservice.getUsers().subscribe(
      response=>{
        console.log('Lista de propietarios',response)
        for(let i = 0; i<response.length; i++){
          if(response[i].is_owner == true){
            // console.log(response[i]);
            this.propietarios[indice] =  response[i];
            indice++;
          }
        }
      }
    )
  }


  selectRestaurant(name:string){
    this.adminservice.restaurantsSearch(name).subscribe(
      response =>{
        console.log("restaurant "); 
        this.restaurantName = response[0].name;
        this.restaurantCity = response[0].city;
        this.restaurantHomeService = response[0].homeService;
        this.restaurantId = response[0].id;
        this.restaurantSelect = true;
        console.log(this.restaurantId);
        //precarga los datos->
        this.registerForm = this.fb.group({
          name: [response[0].name, [Validators.required]],
          email: [response[0].email, [Validators.required, Validators.minLength(6)]],
          homeService: [response[0].homeService , [Validators.required] ],
          // restrictions: [response[0].restrictions, [Validators.required] ],
          state: [response[0].state, [Validators.required] ],
          city: [response[0].city, [Validators.required] ],
          whatsapp: [response[0].whatsapp, [Validators.required] ],
          facebook: [response[0].facebook, [Validators.required] ],
          instagram: [response[0].instagram, [Validators.required] ],
          user_id:[this.bussinessId],
        });
        console.log(this.registerForm.value);
      }
    )
    // console.log(name);
  }
  selectBussiness(nameUser:string){
    this.adminservice.usersSearch(nameUser).subscribe(
      response=>{
        console.log(response[0].name);
        this.bussinessName = response[0].name;
        this.bussinessEmail = response[0].email;
        this.bussinessUsername = response[0].username;
        this.bussinessId = response[0].id;
        this.bussinessSelect = true;
      }
    )
    // console.log(id);
  }
  

  quitarRestaurant(){
    console.log("quitando restaurante");
    this.restaurantSelect = false;
  }
  quitarBussiness(){
    console.log("quitando bussiness");
    this.bussinessSelect = false;
  }
  asignar(){
    this.adminservice.restaurantUpdate(this.restaurantId, JSON.stringify(this.registerForm.value)).subscribe(
      
      response=>{
        console.log(this.restaurantId);
        console.log(response);
        this.renderer.addClass(this.modal.nativeElement, "is-active");
      }
    )
  }



}
