import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { TecnologiaService } from '../tecnologia.service';
import {Tecnologia} from '../tecnologia';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-tecnologia-create',
    templateUrl: './tecnologia-create.component.html',
    styleUrls: ['./tecnologia-create.component.css']
})
export class TecnologiaCreateComponent implements OnInit {

    constructor(
        private tecnologiaService: TecnologiaService,
        private toastrService: ToastrService
    ) {}

    tecnologia: Tecnologia;
    tecnologiaForm: FormGroup;
    tecnologias: Tecnologia[] = new Array();

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

   /**
    * Crea una nueva tecnologia
    */
   createTecnologia(): Tecnologia {
        this.tecnologia.id = 88;
        this.tecnologiaService.createTecnologia(this.tecnologia).subscribe(tecnologia => {
        this.tecnologias.push(tecnologia);
        });
                this.create.emit();
                this.toastrService.success("The lugar was created", "Lugar creation");
        return this.tecnologia;
   }

   cancelCreation(): void {
    this.cancel.emit();
    }

   /**
    * Inicializa el componente
    */
   ngOnInit(): void {
       this.tecnologia = new Tecnologia();
   }
}