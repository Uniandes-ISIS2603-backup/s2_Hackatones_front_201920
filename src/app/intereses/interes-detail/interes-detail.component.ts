import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { InteresService } from '../interes.service';
import { Interes } from '../interes';
import { InteresDetail } from '../interes-detail';

@Component({
  selector: 'app-interes-detail',
  templateUrl: './interes-detail.component.html'
})
export class InteresDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param interesService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private interesService: InteresService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  interesDetail: InteresDetail = new InteresDetail();



  /**
  * The editorial's id retrieved from the address
  */
  @Input() interes_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getInteresDetail(): void {
    this.interesService.getInteresDetail(this.interes_id)
      .subscribe(inter => {
        this.interesDetail = inter
      });
  }

  onLoad(params) {

    this.interes_id = parseInt(params['id']);
    console.log(" en detail " + this.interes_id);
    this.interesDetail = new InteresDetail();
    this.getInteresDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}