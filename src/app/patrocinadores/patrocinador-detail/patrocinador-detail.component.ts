import { Component, OnInit, Input } from '@angular/core';
import{ Patrocinador }from '../patrocinador';
import{ PatrocinadorDetail }from '../patrocinador-detail';
import { PatrocinadoresService } from '../patrocinadores.service';
import { ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-patrocinador-detail',
  templateUrl: './patrocinador-detail.component.html',
  styleUrls: ['./patrocinador-detail.component.css']
})
export class PatrocinadorDetailComponent implements OnInit {

  constructor(
    private patrocinadorService: PatrocinadoresService,
    private route: ActivatedRoute
  ) { }

  /**
  * The patrocinador whose details we want to show
  */
  patrocinadorDetail: PatrocinadorDetail;



  /**
  * The patrocinador's id retrieved from the address
  */
  @Input() patrocinador_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an patrocinador
  */
  getpatrocinadorDetail(): void {

    this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
      .subscribe(o => {
        this.patrocinadorDetail = o
      });
  }

  onLoad(params) {

    this.patrocinador_id = parseInt(params['id']);
    console.log(" en detail " + this.patrocinador_id);
    this.patrocinadorDetail = new PatrocinadorDetail();
    this.getpatrocinadorDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}