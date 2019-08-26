import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppPassword]'
})
export class AppPasswordDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
   }

   toggle(i: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      i.innerHTML = ' Ocultar Contraseña';
      
      
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      i.innerHTML = 'Mostrar Contraseña';
      
      
    }
  }
setup() {
    const parent = this.el.nativeElement.parentNode;
    const i = document.createElement('i');
    i.innerHTML = `Mostrar Contraseña`; 
    
    i.addEventListener('click', (event) => {
      this.toggle(i);
    });
    parent.appendChild(i);
  }
}
