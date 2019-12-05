import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Params} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {Tecnologia} from '../tecnologia';
import { TecnologiaService } from '../tecnologia.service';
import { TecnologiaDetail } from '../tecnologia-detail';

@Component({
    selector: 'app-tecnologia-detail',
    templateUrl: './tecnologia-detail.component.html',
    styleUrls: ['./tecnologia-detail.component.css']
})

export class TecnologiaDetailComponent implements OnInit, OnDestroy {

    constructor(
        private tecnologiaService: TecnologiaService,
        private route: ActivatedRoute,
    ) {}

    tecnologiaDetail: TecnologiaDetail = new TecnologiaDetail();

    @Input() tecnologia_id: number;

    loader: any;

    /**
     * Toma el detalle de la tecnologia a mostrar
     */
    getTecnologiaDetail(): void {
        this.tecnologiaService.getTecnologiaDetail(this.tecnologia_id).subscribe(tecnologia => {
            this.tecnologiaDetail = tecnologia
        });
    }

    onLoad(params) {
        this.tecnologia_id = parseInt(params['id']);
        this.tecnologiaDetail = new TecnologiaDetail();
        this.getTecnologiaDetail();
    }

    /**
     * Inicializa el componente
     */
    ngOnInit() {
        this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    }

    /**
     * Refresca la vista cuando se necesita cargar otra tecnologia
     */
    ngOnDestroy() {
        this.loader.unsubscribe();
    }

}