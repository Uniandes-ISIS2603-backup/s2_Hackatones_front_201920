
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lugar } from './lugar';
import {LugarDetail} from './lugar-detail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const lugares = '/lugar';

@Injectable()
export class LugarService {

   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getLugares() : Observable<Lugar[]> {
        return this.http.get<Lugar[]>(API_URL + lugares);
    }
 
  /** POST: añade un nuevo lugar al servidor */
  createLugar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(API_URL + lugares, lugar);
  }

  /** DELETE: elimina un lugar del servidor */
  deleteLugar(idLugar :  number): Observable<Lugar> {
    return this.http.delete<Lugar>(API_URL + lugares + '/' + idLugar);
    }

  /** PUT: actualiza el lugar en el servidor */
  updateLugar(lugar: Lugar): Observable<LugarDetail> {
    return this.http.put<LugarDetail>(API_URL + lugares + '/' + lugar.identificador, lugar);
  }

  getLugaresDetail(idLugar : number): Observable<LugarDetail> 
    {
      console.log("llega");
        return this.http.get<LugarDetail>(API_URL+lugares+'/'+idLugar);
    }

}