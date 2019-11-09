import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {LenguajeService} from '../lenguaje.service';

@Component({
  selector: 'app-lenguaje-create',
  templateUrl: './lenguaje-create.component.html',
  styleUrls: ['./lenguaje-create.component.css']
})
export class LenguajeCreateComponent implements OnInit {
  lenguajeForm: FormGroup;
  constructor(
    private lenguajeService: LenguajeService,
    private formBuilder: FormBuilder
  ) {
    this.lenguajeForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      id: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

}