import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PatrocinadoresService} from '../patrocinadores.service';


@Component({
  selector: 'app-patrocinadores-create',
  templateUrl: './patrocinadores-create.component.html',
  styleUrls: ['./patrocinadores-create.component.css']
})
export class PatrocinadoresCreateComponent implements OnInit {

patrocinadoresForm: FormGroup;
  constructor( private patrocinadoresService: PatrocinadoresService,
    private formBuilder: FormBuilder) 
    {
      this.patrocinadoresForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", Validators.required],
      ubicacion: ["", Validators.required],
      infoAdicional: ["", Validators.required]
    });
     }

  ngOnInit() {
  }

}