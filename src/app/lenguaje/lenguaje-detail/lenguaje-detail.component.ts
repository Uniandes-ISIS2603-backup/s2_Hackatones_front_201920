import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LenguajeService } from '../lenguaje.service';
import { Lenguaje } from '../lenguaje';
import { LenguajeDetail } from '../lenguaje-detail';

@Component({
  selector: 'app-lenguaje-detail',
  templateUrl: './lenguaje-detail.component.html',
  styleUrls: ['./lenguaje-detail.component.css']
})
export class LenguajeDetailComponent implements OnInit {

    /**
  * The component's constructor
  * @param lenguajeService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private lenguajeService: LenguajeService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  lenguajeDetail: LenguajeDetail = new LenguajeDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() lenguaje_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getLenguajeDetail(): void {

    this.lenguajeService.getLenguajeDetail(this.lenguaje_id)
      .subscribe(o => {
        this.lenguajeDetail = o
      });
  }

  onLoad(params) {

    this.lenguaje_id = parseInt(params['id']);
    console.log(" en detail " + this.lenguaje_id);
    this.lenguajeDetail = new LenguajeDetail();
    this.getLenguajeDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}