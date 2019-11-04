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
  
  //////states
  getStates(): Observable <any> {
    return this.http.get(`${this.api}/state/show`, httpOptions);
  }

  getStateId(id:any): Observable <any> {
    return this.http.get(`${this.api}/state/show/${id}`, httpOptions);
  }

  registerState(params:any): Observable <any> {
    return this.http.post(`${this.api}/state/register`,params, httpOptions);
  }

  updateState(id: any,params: any): Observable <any> {
    return this.http.put(`${this.api}/state/update/${id}`, params, httpOptions);
  }


/////citys


  getCitys(): Observable <any> {
    return this.http.get(`${this.api}/city/show`, httpOptions);
  }

  getCityId(id:any): Observable <any> {
    return this.http.get(`${this.api}/city/show/${id}`, httpOptions);
  }

  registerCity(params:any): Observable <any> {
    return this.http.post(`${this.api}/city/register`,params, httpOptions);
  }

  updateCity(id: any,params: any): Observable <any> {
    return this.http.put(`${this.api}/city/update/${id}`, params, httpOptions);
  }


  ////tabla aux 1 

  getTempCityStates(): Observable <any> {
    return this.http.get(`${this.api}/tempCityState/show`, httpOptions);
  }

  getTempCityStateId(id:any): Observable <any> {
    return this.http.get(`${this.api}/tempCityState/show/${id}`, httpOptions);
  }

  registerTempCityState(params:any): Observable <any> {
    return this.http.post(`${this.api}/tempCityState/register`,params, httpOptions);
  }

  updateTempCityState(id: any,params: any): Observable <any> {
    return this.http.put(`${this.api}/tempCityState/update/${id}`, params, httpOptions);
  }


    ////tabla aux 2 

    getTempRestaurants(): Observable <any> {
      return this.http.get(`${this.api}/tempRestaurant/show`, httpOptions);
    }
  
    getTempRestaurantId(id:any): Observable <any> {
      return this.http.get(`${this.api}/tempRestaurant/show/${id}`, httpOptions);
    }
  
    registerTempRestaurant(params:any): Observable <any> {
      return this.http.post(`${this.api}/tempRestaurant/register`,params, httpOptions);
    }
  
    updateTempRestaurant(id: any,params: any): Observable <any> {
      return this.http.put(`${this.api}/tempRestaurant/update/${id}`, params, httpOptions);
    }
  
}
