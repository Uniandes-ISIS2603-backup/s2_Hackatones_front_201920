import { Component, OnInit } from '@angular/core';
import { Lenguaje} from '../lenguaje';
import { Router } from '@angular/router';
import { LenguajeService } from '../lenguaje.service';



@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {
/**
   * Constructor for the component
   * @param lenguajeService The author's services provider
   */
  constructor(private lenguajeService: LenguajeService, private router: Router) { }

  /**
   * The list of editorials which belong to the BookStore
   */
  lenguajes: Lenguaje[];

  /**
   * Asks the service to update the list of editorials
   */
  getLenguajes(): void {
    this.lenguajeService.getLenguaje().subscribe(editorials => this.lenguajes = editorials);
  }

  
  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getLenguajes();
  }

}