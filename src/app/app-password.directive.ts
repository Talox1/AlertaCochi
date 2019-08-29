import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppPassword]'
})
export class AppPasswordDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
   }

   toggle(a: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      a.innerHTML = ' Ocultar Contraseña';
      
      
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      a.innerHTML = 'Mostrar Contraseña';
      
      
    }
  }
setup() {
    const parent = this.el.nativeElement.parentNode;
    const a = document.createElement('a');
    a.innerHTML = `Mostrar Contraseña`; 
    a.style.color = 'gray';
    
    
    a.addEventListener('click', (event) => {
      this.toggle(a);
    });
    parent.appendChild(a);
  }
}
