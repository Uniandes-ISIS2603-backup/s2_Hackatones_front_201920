import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {InteresService} from '../interes.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Interes} from '../interes';

@Component({
    selector: 'app-interes-create',
    templateUrl: './interes-create.component.html',
    styleUrls: ['./interes-create.component.css']
})
export class InteresCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param interesService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private interesService: InteresService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new author
    */
    interes: Interes;

    lugarForm: FormGroup;

    intereses : Interes[] = new Array();

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
    createInteres(): Interes {
        this.interes.id = 88;
        this.interesService.createInteres(this.interes).subscribe(inter => {
            this.intereses.push(inter);
          });
                this.create.emit();
                this.toastrService.success("The interes was created", "Interes creation");
        return this.interes;
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
        this.interes = new Interes();
    }

}