import { Component, OnInit } from '@angular/core';
import { Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  /**
     * The list of lenguajes which belong to the BookStore
 */ usuarios: Usuario[]= [{id: 1, nombre:"Python"}, {id: 2,nombre:"Java"}];
  constructor() { }

  ngOnInit() {
  }

}