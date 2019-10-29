import { Component, OnInit } from '@angular/core';
import{ Calificacion }from '../calificacion';
import { CalificacionesService } from '../calificaciones.service';

@Component({
  selector: 'app-calificaciones-list',
  templateUrl: './calificaciones-list.component.html',
  styleUrls: ['./calificaciones-list.component.css']
})
export class CalificacionesListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param calificacionService The author's services provider
     */
    constructor(private calificacionService: CalificacionesService) { }

  ngOnInit() {
    this.getCalificaciones();
  }
  getCalificaciones(): void {
        this.calificacionService.getCalificaciones.subscribe(calificaciones => this.calificaciones = calificaciones);
    }
  
  calificaciones: Calificacion[] ;

}