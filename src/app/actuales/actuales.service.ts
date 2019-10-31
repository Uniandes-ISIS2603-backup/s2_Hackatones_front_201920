import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actual } from './actual';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const actuales = 'actual.json';

@Injectable()
export class ActualesService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getActuales() : Observable<Actual[]> {
        return this.http.get<Actual[]>(API_URL + actuales);
    }

}