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
    return this.http.get(`${this.api}users/show`, httpOptions);
  }

  usersSearch(name: string): Observable<any> {
    return this.http.get(`${this.api}users/search/${name}`, httpOptions);
  }

  usersRegister(params: any): Observable<any> {
    return this.http.post(`${this.api}user/register`, params, httpOptions);
  }

  getRestaurants(): Observable <any> {
    return this.http.get(`${this.api}restaurants/show`, httpOptions);
  }

  getRestaurantsId(id: any): Observable <any> {
    return this.http.get(`${this.api}restaurants/show/${id}`, httpOptions);
  }

  restaurantsSearch(name: string): Observable <any> {
    return this.http.get(`${this.api}restaurants/search/${name}`, httpOptions);
  }

  restaurantRegister(params: any): Observable <any> {
    return this.http.post(`${this.api}restaurants/register`, params, httpOptions);
  }

  restaurantUpdate(id: any): Observable <any> {
    return this.http.put(`${this.api}restaurants/update/${id}`, httpOptions);
  }

  restaurantDelete(id: any): Observable <any> {
    return this.http.delete(`${this.api}restaurants/delete/${id}`, httpOptions);
  }


}
