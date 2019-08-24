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
export class RegisterService {
  api: string = API;
  constructor(
  // public wsService: WebsocketService,
   private http: HttpClient
  ) { }
  register(params: string): Observable<any> {
    // tslint:disable-next-line: no-shadowed-variable
    return this.http.post(`${this.api}users/register/` , params , httpOptions);
  }
}