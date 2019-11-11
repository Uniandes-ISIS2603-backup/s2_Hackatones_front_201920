import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LugarService} from '../lugar.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Lugar} from '../lugar';

@Component({
    selector: 'app-lugar-create',
    templateUrl: './lugar-create.component.html',
    styleUrls: ['./lugar-create.component.css']
})
export class LugarCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param lugarService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private lugarService: LugarService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new author
    */
    lugar: Lugar;

    lugarForm: FormGroup;

    lugares : Lugar[];

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
    createLugar(): Lugar {
        console.log(this.lugar.id);
        this.lugarService.createLugar(this.lugar).subscribe(lugar => {
            this.lugares.push(lugar);
          });
                this.create.emit();
                this.toastrService.success("The lugar was created", "Lugar creation");
        return this.lugar;
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
        this.lugar = new Lugar();
    }

}