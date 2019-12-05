import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Hackaton} from './hackaton';
import {HackatonDetail} from './hackaton-detail';
import {environment} from '../../environments/environment';


const API_URL = environment.apiURL;
const hackatones = '/hackatones';


/**
* The service provider for everything related to hackatones
*/
@Injectable()
export class HackatonService {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
        /**
        * Constructor del servicio
        * @param http The HttpClient - This is necessary in order to perform requests
        */
        constructor(private http: HttpClient) { }    
      
        getHackatones() : Observable<Hackaton[]> {
            return this.http.get<Hackaton[]>(API_URL + hackatones);
        }
     
      /** POST: añade un nuevo Hackaton al servidor */
      createHackaton(hackaton: Hackaton): Observable<Hackaton> {
        return this.http.post<Hackaton>(API_URL + hackatones, hackaton);
      }
    
      /** DELETE: elimina una hackaton del servidor */
      deleteHackaton(idHackaton :  number): Observable<Hackaton> {
        return this.http.delete<Hackaton>(API_URL + hackatones + '/' + idHackaton);
        }
    
      /** PUT: actualiza el hackaton en el servidor */
      updateHackaton(hackaton: Hackaton): Observable<HackatonDetail> {
        return this.http.put<HackatonDetail>(API_URL + hackatones + '/' + hackaton.id, hackaton);
      }
    
      getHackatonesDetail(idHackaton : number): Observable<HackatonDetail> 
        {
            return this.http.get<HackatonDetail>(API_URL+hackatones+'/'+idHackaton);
        }
    

    }
