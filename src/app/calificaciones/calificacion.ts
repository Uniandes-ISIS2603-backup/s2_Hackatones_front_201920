import {Hackaton} from "../hackatones/hackatones" ;
export interface Calificacion {
  
  /**
      * El id de la calificacion
      */
  id: number;

  /**
      * La calificacion dada en la calificacion
      */
  calificacion: number;

  /**
      * El comentario de la calificacion
      */
  comentario: string;

  /**
      * La hackaton
      */
  hackaton: Hackaton;
}