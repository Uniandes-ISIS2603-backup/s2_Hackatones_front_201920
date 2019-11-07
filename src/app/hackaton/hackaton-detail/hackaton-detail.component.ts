import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {HackatonService} from '../hackaton.service';
import {Hackaton} from '../hackaton';
import {HackatonDetail} from '../hackaton-detail';
import {HackatonCalificacionComponent} from '../hackaton-calificacion/hackaton-calificacion.component';
import {HackatonAddCalificacionComponent} from '../hackaton-add-calificacion/hackaton-add-calificacion.component';

@Component({
    selector: 'app-hackaton-detail',
    templateUrl: './hackaton-detail.component.html',
    styleUrls: ['./hackaton-detail.component.css']
})
export class HackatonDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param hackatonService The hackaton service which communicates with the API
    * @param route The route which helps to retrieves the id of the hackaton to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private hackatonService: HackatonService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the hackatons in
        //the "Other hackatons" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The hackaton's id retrieved from the path
    */
    hackaton_id: number;

    /**
    * The hackaton whose details are shown
    */
    hackatonDetail: HackatonDetail;

    /**
    * The other hackatons shown in the sidebar
    */
    other_hackatons: Hackaton[];

    /**
    * The suscription which helps to know when a new hackaton
    * needs to be loaded
    */
    navigationSubscription;


    /**
     * The child HackatonCalificacionListComponent
     */
    @ViewChild(HackatonCalificacionComponent) calificacionListComponent: HackatonCalificacionComponent;

    /**
     * The child HackatonCalificacionListComponent
     */
    @ViewChild(HackatonAddCalificacionComponent) calificacionAddComponent: HackatonAddCalificacionComponent;

    toggleCalificacions(): void {
        if (this.calificacionAddComponent.isCollapsed == false) {
            this.calificacionAddComponent.isCollapsed = true;
        }
        this.calificacionListComponent.isCollapsed = !this.calificacionListComponent.isCollapsed;
    }

    toggleCreateCalificacion(): void {
        if (this.calificacionListComponent.isCollapsed == false) {
            this.calificacionListComponent.isCollapsed = true;
        }
        this.calificacionAddComponent.isCollapsed = !this.calificacionAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the hackaton that
    * we want to show
    */
    getHackatonDetail(): void {
        this.hackatonService.getHackatonDetail(this.hackaton_id)
            .subscribe(hackatonDetail => {
                this.hackatonDetail = hackatonDetail;
            });
    }

    /**
    * This method retrieves all the hackatons in the Hackatonstore to show them in the list
    */
    getOtherHackatons(): void {
        this.hackatonService.getHackatons()
            .subscribe(hackatons => {
                this.other_hackatons = hackatons;
                this.other_hackatons = this.other_hackatons.filter(hackaton => hackaton.id !== this.hackaton_id);
            });
    }

    /**
     * The function called when a calificacion is posted, so that the child component can refresh the list
     */
    updateCalificacions(): void {
        this.getHackatonDetail();
        this.calificacionListComponent.updateCalificaciones(this.hackatonDetail.calificaciones);
        this.calificacionListComponent.isCollapsed = false;
        this.calificacionAddComponent.isCollapsed = true;
    }

    /**
* This function deletes the hackaton from the HackatonStore 
*/
    deleteHackaton(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a hackaton',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this hackaton?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.hackatonService.deleteHackaton(this.hackaton_id).subscribe(hackaton => {
                            this.toastrService.success("The hackaton  ", "Hackaton deleted");
                            this.router.navigate(['hackatons/list']);
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
    * The method which initilizes the component
    * We need to initialize the hackaton and its so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.hackaton_id = +this.route.snapshot.paramMap.get('id');
        this.hackatonDetail = new HackatonDetail();
        this.getHackatonDetail();
        this.getOtherHackatons();
    }

    /**
    * This method helps to refresh the view when we need to load another hackaton into it
    * when one of the other hackatons in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}