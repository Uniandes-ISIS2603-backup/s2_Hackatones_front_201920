
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interes } from './interes';
import {InteresDetail} from './interes-detail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const intereses = '/interes';

@Injectable()
export class InteresService {

   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getIntereses() : Observable<Interes[]> {
        return this.http.get<Interes[]>(API_URL + intereses);
    }
 
  /** POST: añade un nuevo lugar al servidor */
  createInteres(inter: Interes): Observable<Interes> {
    return this.http.post<Interes>(API_URL + intereses, inter);
  }

  /** DELETE: elimina un lugar del servidor */
  deleteInteres(idInteres :  number): Observable<Interes> {
    return this.http.delete<Interes>(API_URL + intereses + '/' + idInteres);
    }

  /** PUT: actualiza el lugar en el servidor */
  updateInteres(inter: Interes): Observable<InteresDetail> {
    return this.http.put<InteresDetail>(API_URL + intereses + '/' + inter.id, inter);
  }

  getInteresDetail(idInteres : number): Observable<InteresDetail> 
    {
        return this.http.get<InteresDetail>(API_URL+intereses+'/'+idInteres);
    }

}