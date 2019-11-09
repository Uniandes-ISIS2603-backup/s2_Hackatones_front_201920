import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lenguaje } from './lenguaje';
import { LenguajeDetail } from './lenguaje-detail';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const lenguajes = 'lenguajes.json';

@Injectable()
export class LenguajeService {

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
        return this.http.get<LenguajeDetail>(API_URL + "lenguaje-" + lenguajeId+".json");
    }
}