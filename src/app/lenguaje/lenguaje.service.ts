import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lenguaje } from './lenguaje';
import { Observable } from 'rxjs';

const API_URL = '';
const lenguajes = '';

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
}