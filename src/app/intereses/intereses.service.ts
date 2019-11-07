
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intereses } from './intereses';
import {InteresesDetail} from './intereses-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const intereses = 'intereses.json';

@Injectable()
export class InteresesService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getIntereses() : Observable<Intereses[]> {
        return this.http.get<Intereses[]>(API_URL + intereses);
    }

        getInteresesDetail(interesesId): Observable<InteresesDetail> {
        return this.http.get<InteresesDetail>(API_URL + "intereses-" + interesesId+".json");
    }

}