import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hackaton } from './hackatones';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const hackatones = 'hackatones.json';

@Injectable()
export class HackatonService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getHackatones() : Observable<Hackaton[]> {
        return this.http.get<Hackaton[]>(API_URL + hackatones);
    }

}