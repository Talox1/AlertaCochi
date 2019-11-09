import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {API} from '../app-config';


  let httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    'Authorization' : 'Bearer ' + localStorage.getItem('token'),
  })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api: string = API;
  constructor(private http: HttpClient) { }

  actualizarHeaders(){
    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization' : 'Bearer ' + localStorage.getItem('token'),
      })
    }; 
  }

  getUsers(): Observable<any> {//obtiene todo los restaurants
    console.log(localStorage.getItem('token'))
    return this.http.get(`${this.api}admin/users/show`, httpOptions);
  }

  adminProfile(): Observable<any> {//para que el admin pueda ver sus datos
    return this.http.get(`${this.api}admin/myProfile/show`, httpOptions);
  }

  usersSearch(name: string): Observable<any> {
    return this.http.get(`${this.api}admin/users/search/${name}`, httpOptions);
  }

  usersRegister(params: any): Observable<any> {
    return this.http.post(`${this.api}admin/users/register`, params, httpOptions);
  }

  getRestaurants(): Observable <any> {//obtiene todo los negocios
    this.actualizarHeaders();
    return this.http.get(`${this.api}admin/restaurants/show`, httpOptions);
  }

  getRestaurantsId(id: any): Observable <any> { 
    return this.http.get(`${this.api}admin/restaurants/show/${id}`, httpOptions);
  }

  restaurantsSearch(name: string): Observable <any> {
    return this.http.get(`${this.api}admin/restaurants/search/${name}`, httpOptions);
  }

  restaurantRegister(params: any): Observable <any> {
    return this.http.post(`${this.api}admin/restaurants/register`, params, httpOptions);
  }

  restaurantUpdate(id: any,params: any): Observable <any> {
    return this.http.put(`${this.api}admin/restaurants/update/${id}`,params, httpOptions);
  }

  restaurantDelete(id: any): Observable <any> {
    return this.http.delete(`${this.api}admin/restaurants/delete/${id}`, httpOptions);
  }

  promotionsRegister(params: any): Observable <any> {
    return this.http.post(`${this.api}admin/promotions/register`, params , httpOptions);
  }

  promotionsUpdate(id: any): Observable <any> {
    return this.http.put(`${this.api}admin/promotions/update/${id}`, httpOptions);
  }

  promotionsDelete(id: any): Observable <any> {
    return this.http.put(`${this.api}admin/promotions/delete/${id}`, httpOptions);
  }


}
