import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {API} from '../app-config';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    // 'Authorization' : 'Bearer ' + localStorage.getItem('token'),
  })
};
@Injectable({
  providedIn: 'root'
})
export class InvitadoService {
  api: string = API;
  constructor(private http: HttpClient) { }

  // Route.get('promotions/show/', 'PromotionController.index')
  getRestaurants(): Observable <any> {
    return this.http.get(`${this.api}/restaurants/show/`, httpOptions);
  }

  getPromotions(): Observable <any> {
    return this.http.get(`${this.api}/promotions/show/`, httpOptions);
  }
  
}
