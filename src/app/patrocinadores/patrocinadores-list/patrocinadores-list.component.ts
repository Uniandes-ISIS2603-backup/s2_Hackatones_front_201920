import { Component, OnInit } from '@angular/core';
import{ Patrocinador }from '../patrocinador';
import { PatrocinadoresService } from '../patrocinadores.service';

@Component({
  selector: 'app-patrocinadores-list',
  templateUrl: './patrocinadores-list.component.html'
})
export class PatrocinadoresListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private patrocinadoresService: PatrocinadoresService) { }

  ngOnInit() {
    this.getPatrocinadores();
  }
  getPatrocinadores(): void {
        this.patrocinadoresService.getPatrocinadores().subscribe(patrocinadores => this.patrocinadores = patrocinadores);
    }
  
  patrocinadores: Patrocinador[] ;

}