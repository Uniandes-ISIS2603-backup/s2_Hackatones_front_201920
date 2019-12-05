import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PatrocinadoresService} from '../patrocinadores.service';
import {Patrocinador} from '../patrocinador';


@Component({
  selector: 'app-patrocinadores-create',
  templateUrl: './patrocinadores-create.component.html'
})
export class PatrocinadoresCreateComponent implements OnInit {

 /**
    * Constructor for the component
    * @param patrocinadoresService The patrocinadores services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private patrocinadoresService: PatrocinadoresService,
    private toastrService: ToastrService
) {}

patrocinador: Patrocinador;

    patrocinadorForm: FormGroup;

    patrocinadores : Patrocinador[] = new Array();

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an patrocinador
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new patrocinador
   */
   @Output() create = new EventEmitter();

   /**
    * Creates an author
    */
   createPatrocinador(): Patrocinador {
    this.patrocinador.id = 88;
    this.patrocinadoresService.createPatrocinador(this.patrocinador).subscribe(patrocinador => {
        this.patrocinadores.push(patrocinador);
      });
            this.create.emit();
            this.toastrService.success("The patrocinador was created", "Patrocinador creation");
    return this.patrocinador;
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
    this.patrocinador = new Patrocinador();
}

}