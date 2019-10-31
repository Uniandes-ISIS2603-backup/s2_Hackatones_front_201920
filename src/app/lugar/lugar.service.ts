import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const lugares = 'lugar.json';

@Injectable()
export class LugarService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getLugares() : Observable<Lugar[]> {
        return this.http.get<Lugar[]>(API_URL + lugares);
    }

}