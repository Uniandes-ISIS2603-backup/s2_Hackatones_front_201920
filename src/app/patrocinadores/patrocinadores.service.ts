import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patrocinador } from './patrocinador';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const patrocinadores = 'patrocinadores.json';

@Injectable()
export class PatrocinadoresService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getPatrocinadores() : Observable<Patrocinador[]> {
        return this.http.get<Patrocinador[]>(API_URL + patrocinadores);
    }

}