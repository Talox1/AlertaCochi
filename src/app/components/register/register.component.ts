import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
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

  constructor(
    public fb: FormBuilder, 
    public registerService: RegisterService,
    private renderer: Renderer2) {
    
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
   }

  ngOnInit() {

  }
  register(){
      this.registerService.register(this.registerForm.value).subscribe(
        // tslint:disable-next-line: no-unused-expression
        response => {
          console.log(response);
          localStorage.setItem('token', response.token);
        }
      );

    // console.log(this.registerForm.value);
    this.renderer.addClass(this.modal.nativeElement, "is-active");
  }
}
