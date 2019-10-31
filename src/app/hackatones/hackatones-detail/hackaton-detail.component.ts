import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { HackatonService } from '../hackatones.service';
import { Hackaton } from '../hackatones';
import { HackatonDetail } from '../hackatones-detail';

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
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the hackatones in
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
        this.hackatonService.getHackatones()
            .subscribe(hackatons => {
                this.other_hackatons = hackatons;
                this.other_hackatons = this.other_hackatons.filter(hackaton => hackaton.id !== this.hackaton_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the hackaton and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.hackaton_id = + this.route.snapshot.paramMap.get('id');
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