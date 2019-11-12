import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo} from './equipo';
import { EquipoDetail } from './equipo-detail';
import { Observable, of } from 'rxjs';

const API_URL = "../../assets/";
const equipos = 'equipos.json';

@Injectable()
export class EquipoService {


   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    createEquipo(equipo): Observable<EquipoDetail> {
        return this.http.post<EquipoDetail>(API_URL + equipos, equipo);
    }
        /**
    * Returns the Observable object containing the list of equipos retrieved from the API
    * @returns The list of books in real time
    */
    getEquipos(): Observable<Equipo[]> {
        return this.http.get<Equipo[]>(API_URL + equipos);
    }

    getEquipoDetail(equipoId): Observable<EquipoDetail> {
        return this.http.get<EquipoDetail>(API_URL + "equipo-" + equipoId+".json");
    }
}


