import { Lenguaje } from "../lenguaje/lenguaje";

export interface Participante 
{
  /**
    * The participante's id
    */
    id: number;

    
    inscrito: string;

    //actual: actual;
    //equipo: equipo;
    //tecnologias[]:tecnologia;
    //intereses[]: interes;
    lenguajes: Lenguaje[];
}