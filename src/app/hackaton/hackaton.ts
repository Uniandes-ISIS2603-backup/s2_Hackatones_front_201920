import { Lugar } from "../lugar/lugar";

export class Hackaton {
    id:number;
    
    limiteParticipantes:number;

    nombre:string;

    tipo:string;

    tema:string;

    especificacion:string;

    nivel:number;

    imagen:string;

    fechaInicio:Date;

    fechaFinal:Date;

    premio:string;

    finalizada:number;

    iniciada:number;

    tamanoEquipos:number;

    reglas:string;

    restricciones:string;

}