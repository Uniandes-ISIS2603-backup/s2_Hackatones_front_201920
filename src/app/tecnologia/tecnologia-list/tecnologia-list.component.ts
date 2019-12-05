import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Tecnologia} from '../../tecnologia/tecnologia';
import {TecnologiaService} from '../../tecnologia/tecnologia.service';

@Component ({
    selector: 'app-tecnologia-list',
    templateUrl: './tecnologia-list.component.html',
    styleUrls: ['./tecnologia-list.component.css']
})
export class TecnologiaListComponent implements OnInit {

    /**
     * El constructor del componente
     */
    constructor(private tecnologiaService: TecnologiaService, private router: Router) { this.tecnologias = []; }

    /**
     *  La lista de tecnologias a mostrar
     */
    tecnologias: Tecnologia[];

    /**
     * Toma todas las tecnologias de los participantes para mostrar en la lista
     */
    getTecnologias(): void {
        this.tecnologiaService.getTecnologias().subscribe(tecnologias => this.tecnologias = tecnologias);
    }

    /**
     * El metodo que inicializa el componente
     */
    ngOnInit() {
        this.getTecnologias();
    }
}