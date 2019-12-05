import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import { LugarService } from '../lugar.service';
import { Lugar } from '../lugar';
import { LugarDetail } from '../lugar-detail';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html'
})
export class LugarDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private lugarService: LugarService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  lugarDetail: LugarDetail = new LugarDetail();



  /**
  * The editorial's id retrieved from the address
  */
  @Input() lugar_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getLugaresDetail(): void {
    this.lugarService.getLugaresDetail(this.lugar_id)
      .subscribe(lugar => {
        this.lugarDetail = lugar
      });
  }

  onLoad(params) {

    this.lugar_id = parseInt(params['id']);
    console.log(" en detail " + this.lugar_id);
    this.lugarDetail = new LugarDetail();
    this.getLugaresDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}