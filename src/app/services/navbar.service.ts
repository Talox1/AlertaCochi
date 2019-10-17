import { Injectable,  Output, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  currentUser:string;
  isloged = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<string> = new EventEmitter();

  toggle() {
    this.isloged = !this.isloged;
    console.log(this.isLoged);
    this.change.emit(this.isloged);
  }
  isLoged(){
    return this.isloged;
  }
  getCurrentUser(){
    return this.currentUser;
  }
  constructor(){}
}
