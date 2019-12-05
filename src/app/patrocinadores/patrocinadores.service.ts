import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patrocinador } from './patrocinador';
import { Observable } from 'rxjs';
import { PatrocinadorDetail } from './patrocinador-detail';

const API_URL = "../../assets/";
const patrocinadores = 'patrocinadores.json';

@Injectable()
export class PatrocinadoresService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getPatrocinadores() : Observable<Patrocinador[]> {
        return this.http.get<Patrocinador[]>(API_URL + patrocinadores);
    }

    getPatrocinadorDetail(patrocinadorId): Observable<PatrocinadorDetail> {
        return this.http.get<PatrocinadorDetail>(API_URL + "patrocinador-" + patrocinadorId+".json");
    }

    /** POST: añade un nuevo patrocinador al servidor */
  createPatrocinador(patrocinador: Patrocinador): Observable<Patrocinador> {
    return this.http.post<Patrocinador>(API_URL + patrocinadores, patrocinador);
  }
}