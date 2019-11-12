import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { TecnologiaService } from '../tecnologia.service';

import {Tecnologia} from '../tecnologia';

@Component ({
    selector: 'app-tecnologia-create',
    templateUrl: './tecnologia-create.component.html',
    styleUrls: ['./tecnologia-create.component.css'],
    providers: [DatePipe]
})
export class TecnologiaCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private tecnologiaService: TecnologiaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    tecnologia: Tecnologia;

    /**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
   cancelCreation(): void {
    this.toastrService.warning('The tecnologia wasn\'t created', 'Tecnologia creation');
    this.router.navigate(['/tecnologias/list']);
   }

   /**
    * Crea una nueva tecnologia
    */
   createTecnologia(): Tecnologia {
       let name: String = new String(this.tecnologia.name);
       this.tecnologiaService.createTecnologia(this.tecnologia).subscribe(tecnologia => {
           this.tecnologia.id = tecnologia.id;
           this.router.navigate['/tecnologias/' + tecnologia.id];
       }, err =>  {
           this.toastrService.error(err, 'Error');
       })
       return this.tecnologia;
   }

   /**
    * Inicializa el componente
    */
   ngOnInit() {
       this.tecnologia = new Tecnologia();
   }
}