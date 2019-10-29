import { Component, Input } from '@angular/core';
import { Calificacion } from "./calificacion.model";

@Component({
  templateUrl: './calificacion.component.html',
  selector: 'calificacion',
})
export class CalificacionComponent  {
  constructor() {}

  calificaciones: Calificacion[]=[{id: 123, comentario: "mala", calificacion: 0.5}, {id: 321, comentario: "normal", calificacion:3.2}];;
}
