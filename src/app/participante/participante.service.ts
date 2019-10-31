import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from './participante';
import { Observable } from 'rxjs';

const API_URL = '';
const participantes = '';

@Injectable()
export class ParticipanteService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getParticipante() : Observable<Participante[]> {
        return this.http.get<Participante[]>(API_URL + participantes);
    }
}