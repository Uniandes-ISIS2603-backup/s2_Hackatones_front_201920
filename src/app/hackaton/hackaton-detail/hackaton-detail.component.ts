import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Params} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {HackatonService} from '../hackaton.service';
import {Hackaton} from '../hackaton';
import {HackatonDetail} from '../hackaton-detail';
import { Interes } from '../../intereses/interes';

@Component({
    selector: 'app-hackaton-detail',
    templateUrl: './hackaton-detail.component.html',
    styleUrls: ['./hackaton-detail.component.css']
})
export class HackatonDetailComponent implements OnInit, OnDestroy {

    /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private hackatonService: HackatonService,
    private hackatonesService : HackatonService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  hackatonDetail: HackatonDetail = new HackatonDetail();

  hackaton : Hackaton = new Hackaton(); 





  /**
  * The editorial's id retrieved from the address
  */
  @Input() hackaton_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getHackatonesDetail(): void {
    this.hackatonService.getHackatonesDetail(this.hackaton_id)
      .subscribe(hackaton => {
        this.hackatonDetail = hackaton
      });
  }

  onLoad(params) {

    this.hackaton_id = parseInt(params['id']);
    console.log(" en detail " + this.hackaton_id);
    this.hackatonDetail = new HackatonDetail();
    this.getHackatonesDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  myDateParser(dateStr : string) : string {
    // 2018-01-01T12:12:12.123456; - converting valid date format like this

    let date = dateStr.substring(0, 10);
    let time = dateStr.substring(11, 19);
    let millisecond = dateStr.substring(20)

    let validDate = date + 'T' + time + '.' + millisecond;
    console.log(validDate)
    return validDate
  }
}