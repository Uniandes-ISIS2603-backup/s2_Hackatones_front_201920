import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Proxima} from './proxima';
import {ProximaDetail} from './proxima-detail';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const proximas = '/proximas';

@Injectable
export class ProximaService {

    /**
     * Constructor del servicio
     * @param http el cliente http
     */
    constructor(private http: HttpClient) { }

    /**
     * Devuelve el objeto observable con una lista de proximas obtenidas del API
     * @returns la lista de proximas
     */
    getProximas(): Observable<Proxima> {
        return this.http.get<Proxima[]>(API_URL + proximas);
    }

    /**
     * Crea un nuevo evento proximo
     * @param proxima La nueva proxima a crear
     * @returns La nueva proxima con su id
     */
    createProxima(proxima): Observable<ProximaDetail> {
        return this.http.post<ProximaDetail>(API_URL + proximas, proxima);
    }

    /**
     * Devuelve el observable con los detalles de la proxima solicitada
     * @param proximaId el id de la proxima
     * @returns el observable con el detalle de la proxima
     */
    getProximaDetail(proximaId): Observable<ProximaDetail> {
        return this.http.get<ProximaDetail>(API_URL + proximas + '/' + proximaId);
    }

    /**
     * Actualiza la proxima
     * @param proxima La proxima a actualizar
     * @returns La proxima actualizada
     */
    updateProxima(proxima): Observable<ProximaDetail> {
        return this.http.put<ProximaDetail>(API_URL + proximas + '/' + proximas.id, proximas);
    }

    /**
     * Borra una proxima
     * @param proximaId El id de la proxima
     * @returns True si la proxima fue borrada, falso en el caso contrario
     */
    deleteProxima(proximaId): Observable<ProximaDetail> {
        return this.http.delete<ProximaDetail>(API_URL + proximas + '/' + proximaId);
    }
}