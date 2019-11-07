import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { HackatonService } from '../hackaton.service';
import { Hackaton } from '../../hackaton/hackaton';
@Component({
    selector: 'app-hackaton-add-calificacion',
    templateUrl: './hackaton-add-calificacion.component.html',
    styleUrls: ['./hackaton-add-calificacion.component.css']
})
export class HackatonAddCalificacionComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param hackatonService The hackaton service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private hackatonService: HackatonService,
        private toastrService: ToastrService
    ) { }

    /**
    * The hackaton's id
    */
    @Input() hackaton: Hackaton;

    /**
    * The calificacion to post
    */
    calificacion: Calificacion;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a calificacion has just been posted
    * so that the list of calificacions refreshes
    */
    @Output() updateCalificacions = new EventEmitter();

    /**
    * This function posts a calificacion
    * @param calificacionForm The form of the calificacion
    */
    postCalificacion(calificacionForm: NgForm): Calificacion {
        this.calificacion.hackaton = this.hackaton;
        this.hackatonService.createCalificacion(this.hackaton.id,this.calificacion)
            .subscribe(() => {
                calificacionForm.resetForm();
                this.updateCalificacions.emit();
                this.toastrService.success("The calificacion was successfully created", 'Calificacion added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.calificacion;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

    /**
    * The function which notices that the input which defines the hackaton_id has changed.
    * If the hackaton has changed, we update the calificacions to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}