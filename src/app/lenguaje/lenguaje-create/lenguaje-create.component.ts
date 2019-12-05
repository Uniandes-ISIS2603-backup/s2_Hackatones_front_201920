import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {LenguajeService} from '../lenguaje.service';
import {ToastrService} from 'ngx-toastr';
import {Lenguaje} from '../lenguaje';



@Component({
  selector: 'app-lenguaje-create',
  templateUrl: './lenguaje-create.component.html',
  styleUrls: ['./lenguaje-create.component.css']
})
export class LenguajeCreateComponent implements OnInit {
  

  constructor(
    private lenguajeService: LenguajeService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.lenguajeForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      id: ["", Validators.required]
    });
  }

  lenguajeForm: FormGroup;
  lenguaje: Lenguaje;
  lenguajes: Lenguaje[] = new Array();

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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}

createLenguaje(): Lenguaje {
  this.lenguaje.id = 88;
  this.lenguajeService.createLugar(this.lenguaje).subscribe(lugar => {
      this.lenguajes.push(lugar);
    });
          this.create.emit();
          this.toastrService.success("The lenguaje was created", "lenguaje creation");
  return this.lenguaje;
}

ngOnInit() {
    this.lenguaje = new Lenguaje;
  }

}