import { Injectable,  Output, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  public currentUser: string;
  public isLoged = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isLoged = !this.isLoged;
    this.change.emit(this.isLoged);
  }
  constructor() { }
}
