import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HackatonService} from '../hackaton.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Hackaton} from '../hackaton';

@Component({
    selector: 'app-hackaton-create',
    templateUrl: './hackaton-create.component.html',
    styleUrls: ['./hackaton-create.component.css']
})
export class HackatonCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param hackatonService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private hackatonService: HackatonService,
    private toastrService: ToastrService
) {}

/**
* The new author
*/
hackaton: Hackaton;

hackatonForm: FormGroup;

hackatones : Hackaton[] = new Array();

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
createHackaton(): Hackaton {    
    this.hackatonService.createHackaton(this.hackaton).subscribe(hackaton => {
        this.hackatones.push(hackaton);
      });
            this.create.emit();
            this.toastrService.success("The hackaton was created", "Hackaton creation");
    return this.hackaton;
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
    this.hackaton = new Hackaton();
}
}