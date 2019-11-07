
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lugar } from './lugar';
import {LugarDetail} from './lugar-detail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "../assets/";
const lugares = 'lugar.json';

@Injectable({ providedIn: "root" })
export class LugarService {
    
    private lugarUrl = "api/lugares"; 

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
     /** GET lugar por id. manda 404 si no encuentra el lugar dado por id */
  getLugar(id: number): Observable<Lugar> {
    const url = `${this.lugarUrl}/${id}`;
    return this.http.get<Lugar>(url);
  }
  /** POST: añade un nuevo lugar al servidor */
  createLugar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.lugarUrl, lugar, this.httpOptions).pipe(tap((lugar: Lugar) => console.log(`added lugar w/ ${lugar.nombre} id=${lugar.id}`)));
  }

  /** DELETE: elimina un lugar del servidor */
  deleteLugar(lugar: Lugar | number): Observable<Lugar> {
    const id = typeof lugar === "number" ? lugar : lugar.id;
    const url = `${this.lugarUrl}/${id}`;

    return this.http.delete<Lugar>(url, this.httpOptions);
  }

  /** PUT: actualiza el lugar en el servidor */
  updateLugar(lugar: Lugar): Observable<any> {
    return this.http.put(this.lugarUrl, lugar, this.httpOptions);
  }

  getLugaresDetail(lugarId): Observable<LugarDetail> {
        return this.http.get<LugarDetail>(API_URL + "lugar-" + lugarId+".json");
    }

}