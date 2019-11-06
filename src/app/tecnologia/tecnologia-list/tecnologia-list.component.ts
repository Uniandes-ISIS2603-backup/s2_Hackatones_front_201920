import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Tecnologia} from '../../tecnologia/tecnologia';
import {TecnologiaService} from '../../tecnologia/tecnologia.service';

@Component ({
    selector: 'app-tecnologia-list',
    templateUrl: './tecnologia-list.component.html',
    styleUrls: ['./tecnologia-list.component.css']
})
export class TecnologiaListComponent implements OnInit {
    /**
     *  La lista de tecnologias a mostrar
     */
    @Input() tecnologias: Tecnologia[];

    /**
     * El constructor del componente
     */
    constructor(private tecnologiaService: TecnologiaService, private route: ActivatedRoute) {}

    allTecnologias: string = 'no';

    /**
     * Toma todas las tecnologias de los participantes para mostrar en la lista
     */
    getTecnologias(): void {
        this.tecnologiaService.getTecnologias()
            .subscribe(tecnologias => {
                this.tecnologias = tecnologias;
            })
    }

    /**
     * El metodo que inicializa el componente
     */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allTecnologias)
            .subscribe(params => {
                console.log(params);

                this.allTecnologias = params.allTecnologias;
                console.log(this.allTecnologias);
            });
        if (this.allTecnologias == 'yes') {
            console.log("alltecnologias");
            this.getTecnologias();
        }
    }
}