import { Component, OnInit } from '@angular/core';
import { Lenguaje} from '../lenguaje';

@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {
  /**
     * The list of lenguajes which belong to the BookStore
 */ lenguajes: Lenguaje[]= [{id: 1, name:"Python"}, {id: 2,name:"Java"}];
  constructor() { }

  ngOnInit() {
  }

}