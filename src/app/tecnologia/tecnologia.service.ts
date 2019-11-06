import {Injectable} from '@angular/core';
import {Observable, from} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Tecnologia} from './tecnologia';
import {TecnologiaDetail} from './tecnologia-detail';

import {environment} from '../../environments/environment';
import { Participante } from '../participante/participante';
const API_URL = environment.apiURL;
const tecnologias = '/tecnologia';

@Injectable
export class TecnologiaService {

    /**
     * Constructor del servicio
     * @param http el HttpClient
     */
    constructor(private http: HttpClient) {}

    getTecnologias(): Observable<Tecnologia[]> {
        return this.http.get<Tecnologia[]>(API_URL + tecnologias);
    }

    /**
     * Crea una nueva tecnología
     * @param tecnologia la nueva tecnologia
     * @returns La tecnologia con su nuevo id
     */
    createTecnologia(tecnologia): Observable<TecnologiaDetail> {
        return this.http.post<TecnologiaDetail>(API_URL + tecnologias, tecnologia);
    }

    /**
     * devuelve el observable con el detalle de la tecnologia
     * @param tecnologiaId El id de la tecnologia a consultar
     * @returns Los detalles de la tecnologia
     */
    getTecnologiaDetail(tecnologiaId): Observable<TecnologiaDetail> {
        return this.http.get<TecnologiaDetail>(API_URL + tecnologias + '/' + tecnologiaId);
    }

    /**
     * Actualiza una nueva tecnologia
     * @param tecnologia La tecnologia actualizada
     * @returns La tecnologia actualizada
     */
    updateTecnologia(tecnologia): Observable<TecnologiaDetail> {
        return this.http.put<TecnologiaDetail>(API_URL + tecnologias)
    }

    /**
     * Borra una tecnologia
     * @param tecnologiaId El id de la tecnologia
     * @returns True si la tecnologia, False si no fue eliminada
     */
    deleteTecnologia(tecnologiaId): Observable<TecnologiaDetail> {
        return this.http.delete<TecnologiaDetail>(API_URL + tecnologias + '/' + )
    }
}