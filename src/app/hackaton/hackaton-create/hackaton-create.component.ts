import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {HackatonService} from '../hackaton.service';
import {Hackaton} from '../hackaton';

@Component({
    selector: 'app-hackaton-create',
    templateUrl: './hackaton-create.component.html',
    styleUrls: ['./hackaton-create.component.css'],
    providers: [DatePipe]
})
export class HackatonCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param hackatonService The hackatons' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private hackatonService: HackatonService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new hackaton
    */
    hackaton: Hackaton;

    
    /**
    * Cancels the creation of the new hackaton
    * Redirects to the hackatons' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The hackaton wasn\'t created', 'Hackaton creation');
        this.router.navigate(['/hackatons/list']);
    }

    /**
    * Creates a new hackaton
    *
    createHackaton(): Hackaton {
       
        this.hackatonService.createHackaton(this.hackaton)
            .subscribe(hackaton => {
                this.hackaton.id = hackaton.id;
                this.router.navigate(['/hackatons/' + hackaton.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.hackaton;
    }
    */
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.hackaton = new Hackaton();
    }

}