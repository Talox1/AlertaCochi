import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {API} from '../app-config';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization' : 'Bearer ' + localStorage.getItem('token'),
  })
};
@Injectable({
  providedIn: 'root'
})
export class CaseroService {
  api: string = API;
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable <any> {
    return this.http.get(`${this.api}casero/restaurants/show/`, httpOptions);
  }

  getRestaurantsId(id: any): Observable <any> {
    return this.http.get(`${this.api}casero/restaurants/show/${id}`, httpOptions);
  }

  getPromotionsId(id: any): Observable <any> {
    return this.http.get(`${this.api}casero/restaurants/show/promotions/${id}`, httpOptions);
  }

  restaurantsRegister(params: any): Observable <any> {
    return this.http.get(`${this.api}casero/restaurants/register` , httpOptions);
  } 

  restaurantsUpdate(id: any): Observable <any> {
    return this.http.put(`${this.api}casero/restaurants/update/${id}`, httpOptions);
  }

  restaurantsDelete(id: any): Observable <any> {
    return this.http.put(`${this.api}casero/restaurants/delete/${id}`, httpOptions);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  promotionsRegister(params: any): Observable <any> {
    return this.http.put(`${this.api}casero/promotions/register`, params , httpOptions);
  }

  promotionsUpdate(id: any): Observable <any> {
    return this.http.put(`${this.api}casero/promotions/update/${id}`, httpOptions);
  }

  promotionsDelete(id: any): Observable <any> {
    return this.http.put(`${this.api}casero/promotions/delete/${id}`, httpOptions);
  }
}
