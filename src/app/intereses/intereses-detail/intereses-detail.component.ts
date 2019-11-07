import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { InteresesService } from '../intereses.service';
import { Intereses } from '../intereses';
import { InteresesDetail } from '../intereses-detail';

@Component({
  selector: 'app-intereses-detail',
  templateUrl: './intereses-detail.component.html'
})
export class InteresesDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private interesesService: InteresesService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  interesesDetail: InteresesDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() interes_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getInteresesDetail(): void {

    this.interesesService.getInteresesDetail(this.interes_id)
      .subscribe(interes => {
        this.interesesDetail = interes
      });
  }

  onLoad(params) {

    this.interes_id = parseInt(params['id']);
    console.log(" en detail " + this.interes_id);
    this.interesesDetail = new InteresesDetail();
    this.getInteresesDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
