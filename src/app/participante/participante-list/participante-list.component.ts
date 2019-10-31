import { Component, OnInit } from '@angular/core';
import { Participante} from '../participante';

@Component({
  selector: 'app-participante-list',
  templateUrl: './participante-list.component.html',
  styleUrls: ['./participante-list.component.css']
})
export class ParticipanteListComponent implements OnInit {
  /**
     * The list of lenguajes which belong to the BookStore
 */ participantes: Participante[]= [{id: 1, inscrito:"Si", lenguajes:[{id:1, name:"Python"}]}, {id: 2,inscrito:"No", lenguajes:[{id:2, name:"Java"}]}];
  constructor() { }

  ngOnInit() {
  }

}