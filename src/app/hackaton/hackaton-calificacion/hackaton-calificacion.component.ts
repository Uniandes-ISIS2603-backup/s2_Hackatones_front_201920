import { Component, OnInit, Input, } from '@angular/core';
import { Calificacion } from '../calificacion';

@Component({
    selector: 'app-hackaton-calificacion',
    templateUrl: './hackaton-calificacion.component.html',
})
export class HackatonReviewComponent implements OnInit {
    @Input() hackatonCalificaciones : Calificacion [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a Calificacion is posted to update the Calificaciones
     */
    updateReviews(calificaciones:Calificacion[]): void {
        this.hackatonCalificaciones = calificaciones;
    }
    
    ngOnInit(){
    }
}
