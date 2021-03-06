import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

const API_URL = '';
const lenguajes = '';

@Injectable()
export class UsuarioService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getLenguaje() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + lenguajes);
    }
}