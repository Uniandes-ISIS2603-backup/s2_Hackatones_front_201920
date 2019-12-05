import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lenguaje } from './lenguaje';
import { LenguajeDetail } from './lenguaje-detail';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';



const API_URL = environment.apiURL;
const lenguajes = '/lenguajes';

@Injectable()
export class LenguajeService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };


  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getLenguaje() : Observable<Lenguaje[]> {
        return this.http.get<Lenguaje[]>(API_URL + lenguajes);
    }

     /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getLenguajeDetail(lenguajeId): Observable<LenguajeDetail> {
        return this.http.get<LenguajeDetail>(API_URL + lenguajes +'/'+ lenguajeId);
    }

      /** POST: añade un nuevo lenguaje al servidor */
  createLugar(lenguaje: Lenguaje): Observable<Lenguaje> {
    return this.http.post<Lenguaje>(API_URL + lenguajes, lenguaje);
  }

  /** DELETE: elimina un lenguaje del servidor */
  deleteLugar(idLenguaje :  number): Observable<Lenguaje> {
    return this.http.delete<Lenguaje>(API_URL + lenguajes + '/' + idLenguaje);
    }

  /** PUT: actualiza el lenguaje en el servidor */
  updateLugar(lenguaje: Lenguaje): Observable<LenguajeDetail> {
    return this.http.put<LenguajeDetail>(API_URL + lenguajes + '/' + lenguaje.id, lenguaje);
  }
}