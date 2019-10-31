import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hackaton } from './hackatones';
import { Observable } from 'rxjs';
import { HackatonDetail } from './hackatones-detail';

const API_URL = "../../assets/";
const hackatones = 'hackatones.json';

@Injectable()
export class HackatonService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
     /**
    * Returns the Observable object containing the list of hackatones retrieved from the API
    * @returns The list of hackatones in real time
    */
    getHackatones() : Observable<Hackaton[]> {
        return this.http.get<Hackaton[]>(API_URL + hackatones);
    }

    /**
    * Returns the Observable object with the details of an hackaton retrieved from the API
    * @returns The hackaton details
    */
    getHackatonDetail(hackatonId): Observable<HackatonDetail> {
    return this.http.get<HackatonDetail>(API_URL + hackatones + '/' + hackatonId);
}


}