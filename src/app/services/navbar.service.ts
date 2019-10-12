import { Injectable,  Output, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  private currentUser:string;
  private isloged = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<string> = new EventEmitter();
  

  toggle(currentUser:string) {
    this.isloged = !this.isloged;
    this.currentUser = currentUser;
    this.change.emit(this.isloged);
  }
  isLoged(){
    return this.isloged;
  }
  getCurrentUser(){
    return this.currentUser;
  }
  constructor() { }
}
