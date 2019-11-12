import { Patrocinador } from '../patrocinadores/patrocinador';
import { Hackaton } from './hackaton';
//import { Calificacion } from './calificacion';

/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class HackatonDetail extends Hackaton {
    /**
     * Relacion cero o muchas califiaciones
     */
    //calificaciones:Calificacion[];
    
    /**
     * Relacion uno o muchos patrocinadores
     */
    patrocinadores:Patrocinador[];
}