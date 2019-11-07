import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Hackaton} from './hackaton';
import {HackatonDetail} from './hackaton-detail';
import {Calificacion} from './calificacion';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const hackatones = '/hackatons';
const calificacions = '/calificacions';


/**
* The service provider for everything related to hackatones
*/
@Injectable()
export class HackatonService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of hackatons retrieved from the API
    * @returns The list of hackatons in real time
    */
    getHackatons(): Observable<Hackaton[]> {
        return this.http.get<Hackaton[]>(API_URL + hackatones);
    }

    /**
    * Creates a new hackaton
    * @param hackaton The new hackaton
    * @returns The hackaton with its new id if it was created, false if it wasn't
    */
    createHackaton(hackaton): Observable<HackatonDetail> {
        return this.http.post<HackatonDetail>(API_URL + hackatones, hackaton);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getHackatonDetail(hackatonId): Observable<HackatonDetail> {
        return this.http.get<HackatonDetail>(API_URL + hackatones + '/' + hackatonId);
    }

    /**
    * Creates a calificacion
    * @param calificacion The calificacion
    * @returns True if the calificacion was posted, false otherwise
    */
    createCalificacion(hackatonId, calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL + hackatones + '/' + hackatonId + calificacions, calificacion);
    }

    /**
        * Updates a new hackaton
        * @param hackaton The updated hackaton
        * @returns The updated hackaton
        */
    updateHackaton(hackaton): Observable<HackatonDetail> {
        return this.http.put<HackatonDetail>(API_URL + hackatones + '/' + hackaton.id, hackaton);
    }
    
    /**
    * Deletes a hackaton
    * @param hackatonId The hackaton's id
    * @returns True if the hackaton was deleted, false otherwise
    */
    deleteHackaton(hackatonId): Observable<HackatonDetail> {
        return this.http.delete<HackatonDetail>(API_URL + hackatones + '/' + hackatonId);
    }
}