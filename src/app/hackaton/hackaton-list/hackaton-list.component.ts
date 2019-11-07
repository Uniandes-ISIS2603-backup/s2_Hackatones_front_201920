import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Hackaton} from '../../hackaton/hackaton';
import {HackatonService} from '../../hackaton/hackaton.service';
@Component({
    selector: 'app-hackaton-list',
    templateUrl: './hackaton-list.component.html',
    styleUrls: ['./hackaton-list.component.css']
})
export class HackatonListComponent implements OnInit {

    /**
    * The list of hackatons to display
    */
    @Input() hackatons: Hackaton[];

    /**
    * The component's constructor
    */
    constructor(private hackatonService: HackatonService, private route: ActivatedRoute) {}

    allhackatons: string = 'no';
    /**
    * This method retrieves all the hackatons in the Hackatonstore to show them in the list
    */
    getHackatons(): void {
        this.hackatonService.getHackatons()
            .subscribe(hackatons => {
                this.hackatons = hackatons;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allhackatons)
            .subscribe(params => {
                console.log(params);

                this.allhackatons = params.allhackatons;
                console.log(this.allhackatons);
            });
        if (this.allhackatons == 'yes') {
            console.log("allhackatons");

            this.getHackatons();
        }
    }

}