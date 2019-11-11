import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  lugarDetail: LugarDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() lugar_name: String;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getLugaresDetail(): void {

    this.lugarService.getLugaresDetail(this.lugar_name)
      .subscribe(lugar => {
        this.lugarDetail = lugar
      });
  }

  onLoad(params) {

    this.lugar_name = params['nombre'];
    console.log(" en detail " + this.lugar_name);
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
