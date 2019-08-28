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
export class AdminService {
  api: string = API;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.api}admin/users/show`, httpOptions);
  }

  usersSearch(name: string): Observable<any> {
    return this.http.get(`${this.api}admin/users/search/${name}`, httpOptions);
  }

  usersRegister(params: any): Observable<any> {
    return this.http.post(`${this.api}admin/user/register`, params, httpOptions);
  }

  getRestaurants(): Observable <any> {
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

  restaurantUpdate(id: any): Observable <any> {
    return this.http.put(`${this.api}admin/restaurants/update/${id}`, httpOptions);
  }

  restaurantDelete(id: any): Observable <any> {
    return this.http.delete(`${this.api}admin/restaurants/delete/${id}`, httpOptions);
  }


}
