import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
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
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    tecnologia_id: number;

    tecnologiaDetail: TecnologiaDetail;

    other_tecnologias: Tecnologia[];

    navigationSubscription;

    /**
     * Toma el detalle de la tecnologia a mostrar
     */
    getTecnologiaDetail(): void {
        this.tecnologiaService.getTecnologiaDetail(this.tecnologia_id)
            .subscribe(tecnologiaDetail => {
                this.tecnologiaDetail = tecnologiaDetail;
            })
    }

    /**
     * Retorna todas las tecnologias en la hackaton para mostrarlas en la lista
     */
    getOtherTecnologias(): void {
        this.tecnologiaService.getTecnologias()
            .subscribe(tecnologias => {
                this.other_tecnologias = tecnologias;
                this.other_tecnologias = this.other_tecnologias.filter(tecnologia => tecnologia.id !== this.tecnologia_id);
            })
    }

    /**
     * Borra la tecnologia de la hackaton
     */
    deleteTecnologias(): void {
        this.modalDialogService.openDialogService.openDialog(this.viewRef, {
            title: 'Delete Tecnologia',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de borrar esta tecnologia?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.tecnologiaService.deleteTecnologia(this.tecnologia_id).subscribe(tecnologia => {
                            this.toastrService.success("La tecnologia ", "Tecnologia borrada");
                            this.router.navigate(['tecnologias/list']);
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

    /**
     * Inicializa el componente
     */
    ngOnInit() {
        this.tecnologia_id =+ this.route.snapshot.paramMap.get('id');
        this.tecnologiaDetail = new TecnologiaDetail();
        this.getTecnologiaDetail();
        this.getOtherTecnologias();
    }

    /**
     * Refresca la vista cuando se necesita cargar otra tecnologia
     */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}