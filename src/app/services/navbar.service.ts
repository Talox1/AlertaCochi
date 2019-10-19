import { Injectable,  Output, EventEmitter  } from '@angular/core';


import { API } from '../app-config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})

export class NavbarService {
  api: string = API;
  constructor(
    // public wsService: WebsocketService,
     private http: HttpClient
    ) { }
   
  
  public currentUser:string;
  private isloged = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  

  toggle(currentUser:string) {
    this.isloged = !this.isloged;
    this.currentUser = currentUser;
    this.change.emit(this.isloged);
  }
  isLoged(){
    return this.isloged;
  }
  getCurrentUser(): Observable<any> {//para los datos del usuario logueado
    return this.http.get(`${this.api}myProfile/show`, httpOptions);
  }
  
}
