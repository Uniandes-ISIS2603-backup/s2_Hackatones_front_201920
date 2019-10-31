import { Hackaton } from './hackatones';
import { Calificacion } from '../calificaciones/calificacion';

/**
* This class represents a hackaton. 
* It contains all the information relevant to the hackaton.
*/
export class HackatonDetail extends Hackaton {
    calificaciones: Calificacion[];
}