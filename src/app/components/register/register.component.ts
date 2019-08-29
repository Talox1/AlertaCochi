import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { RegisterService } from 'src/app/services/register.service';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("modalcito") modal: ElementRef;


  registerForm: FormGroup;
 
  currentUser;
  constructor(
    public fb: FormBuilder, 
    public adminService: AdminService,
    private renderer: Renderer2) {
    
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    
   }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
  }
  register(){
    if(this.currentUser == 'admin'){//si es admin ejecuta este servicio
      this.adminService.usersRegister(this.registerForm.value).subscribe(
        response =>{
          console.log(response)
          this.renderer.addClass(this.modal.nativeElement, "is-active");
        }
      )

    }else{//si no se va a este servicio
      
    }
      

    // console.log(this.registerForm.value);
    // this.renderer.addClass(this.modal.nativeElement, "is-active");
  }
}
