import { Injectable } from '@angular/core';

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
export class LoginService {
  api: string = API;
  constructor(
  // public wsService: WebsocketService,
   private http: HttpClient
  ) { }
  login(params: string): Observable<any> {
    // tslint:disable-next-line: no-shadowed-variable
    return this.http.post(`${this.api}users/login/` , params , httpOptions);
  }
  logout(): Observable<any> {
    const httpOptions2 = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        'Autorizathion': 'Bearer ' + localStorage.getItem('token'),
      })
    };
    return this.http.post(`${this.api}users/login/`, httpOptions);
  }
}