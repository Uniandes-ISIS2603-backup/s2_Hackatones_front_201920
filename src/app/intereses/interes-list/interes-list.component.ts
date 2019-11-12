import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Interes } from "../interes";
import { InteresService } from "../interes.service";
import { ToastrComponentlessModule } from "ngx-toastr";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "interes-list",
  templateUrl: "./interes-list.component.html",
  styleUrls: ['./interes-list.component.css'],
})
export class InteresListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param interesService The author's services provider
   */
  constructor(private interesService: InteresService, private router :Router) {
  
  }

  /**
   * The list of editorials which belong to the BookStore
   */
  lista_intereses : Interes[] = new Array();
  /**
   * Asks the service to update the list of editorials
   */
  getIntereses(): void {
    this.interesService.getIntereses().subscribe( intereses => this.lista_intereses = intereses);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getIntereses();
  }
}