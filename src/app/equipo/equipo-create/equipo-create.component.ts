import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {EquipoService} from '../equipo.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Equipo} from '../equipo';

@Component({
    selector: 'app-equipo-create',
    templateUrl: './equipo-create.component.html',
    styleUrls: ['./equipo-create.component.css']
})
export class EquipoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param equipoService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private equipoService: EquipoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new author
    */
    equipo: Equipo;

    equipoForm: FormGroup;

    equipos : Equipo[] = new Array();

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an author
    */
    createEquipo(): Equipo {
        this.equipo.id = 88;
        this.equipoService.createEquipo(this.equipo).subscribe(equipo => {
            this.equipos.push(equipo);
          });
                this.create.emit();
                this.toastrService.success("The equipo was created", "Equipo creation");
        return this.equipo;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.equipo = new Equipo();
    }

}