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
export class OwnerService {
  api: string = API;
  constructor(private http: HttpClient) { }


  ownerProfile(): Observable<any> {//para que el owner pueda ver sus datos
    return this.http.get(`${this.api}owner/myProfile/show`, httpOptions);
  }

  getRestaurants(): Observable <any> {
    return this.http.get(`${this.api}owner/restaurants/show/`, httpOptions);
  }

  getRestaurantsId(id: any): Observable <any> {
    return this.http.get(`${this.api}owner/restaurants/show/${id}`, httpOptions);
  }

  getPromotionsId(id: any): Observable <any> {
    return this.http.get(`${this.api}owner/restaurants/show/promotions/${id}`, httpOptions);
  }

  restaurantsRegister(params: any): Observable <any> {
    return this.http.post(`${this.api}owner/restaurants/register` ,params, httpOptions);
  } 

  restaurantsUpdate(id: any,params:any): Observable <any> {
    return this.http.put(`${this.api}owner/restaurants/update/${id}`,params, httpOptions);
  }

  restaurantsDelete(id: any): Observable <any> {
    return this.http.delete(`${this.api}owner/restaurants/delete/${id}`, httpOptions);
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  promotionsRegister(params: any): Observable <any> {
    return this.http.post(`${this.api}owner/promotions/register`, params , httpOptions);
  }

  promotionsUpdate(id: any, params:any): Observable <any> {
    return this.http.put(`${this.api}owner/promotions/update/${id}`,params, httpOptions);
  }

  promotionsDelete(id: any): Observable <any> {
    return this.http.delete(`${this.api}owner/promotions/delete/${id}`, httpOptions);
  }
}
