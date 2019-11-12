import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Hackaton} from './hackaton';
import {HackatonDetail} from './hackaton-detail';


const API_URL = '../../assets/';
const hackatones = 'hackatones.json';


/**
* The service provider for everything related to hackatones
*/
@Injectable()
export class HackatonService {
    getHackaton() : Observable<Hackaton[]> {
        return this.http.get<Hackaton[]>(API_URL + hackatones);
    }

    getHackatonDetail(hackatonId): Observable<HackatonDetail> {
        return this.http.get<HackatonDetail>(API_URL + "hackaton-" + hackatonId+".json");
    }

    createHackaton(hackaton): Observable<HackatonDetail> {
        return this.http.post<HackatonDetail>(API_URL + hackatones, hackaton);
    }

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

}
