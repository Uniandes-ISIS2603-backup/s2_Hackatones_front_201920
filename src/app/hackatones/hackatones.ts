//import {Actual} from ".\actual" ;
export interface Hackaton {
  
    id:number;
    
    limite_participantes:number;

    nombre:string;

    tipo:string;

    tema:string;

    especificacion:string;

    nivel:number;

    imagen:string;

    fechaInicio:Date;

    fechaFinal:Date;

    premio:string;

    finalizada:boolean;

    tamanoEquipo:number;
}