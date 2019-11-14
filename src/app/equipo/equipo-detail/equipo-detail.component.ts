import { Component, OnInit, Input } from '@angular/core';
import{ Equipo }from '../equipo';
import{ EquipoDetail }from '../equipo-detail';
import { EquipoService } from '../equipo.service';
import { ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute
  ) { }

  /**
  * The equipo whose details we want to show
  */
  equipoDetail: EquipoDetail;



  /**
  * The equipo's id retrieved from the address
  */
  @Input() equipo_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an equipo
  */
  getequipoDetail(): void {

    this.equipoService.getEquipoDetail(this.equipo_id)
      .subscribe(o => {
        this.equipoDetail = o
      });
  }

  onLoad(params) {

    this.equipo_id = parseInt(params['id']);
    console.log(" en detail " + this.equipo_id);
    this.equipoDetail = new EquipoDetail();
    this.getequipoDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}