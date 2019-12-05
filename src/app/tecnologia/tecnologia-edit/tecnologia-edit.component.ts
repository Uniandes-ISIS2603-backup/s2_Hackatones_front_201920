import {Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy} from '@angular/core';

import {TecnologiaService} from '../tecnologia.service';
import {TecnologiaDetail} from '../tecnologia-detail';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tecnologia-edit',
    templateUrl: './tecnologia-edit.component.html',
})
export class TecnologiaEditComponent implements OnInit, OnChanges {
    
    constructor(
        private tecnologiaService: TecnologiaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    tecnologia: TecnologiaDetail;

    tecnologia_id: number;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();
    
    getTecnologia(): void {
        this.tecnologiaService.getTecnologiaDetail(this.tecnologia_id).subscribe(tecnologia => this.tecnologia = tecnologia);
    }

    editTecnologia(): void {
        this.tecnologiaService.updateTecnologia(this.tecnologia)
            .subscribe(() => {
                this.toastrService.success("The tecnologia's information was updated", "Tecnologia edition");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.toastrService.warning('The tecnologia wasn\'t edited', 'Tecnologia edition');
        this.router.navigate(['/tecnologias/list']);
    }

    ngOnChanges(): void {
       this.ngOnInit();
    }
    ngOnInit(): void {
        this.tecnologia_id = +this.route.snapshot.paramMap.get('id');
        this.getTecnologia();
    }
    
}