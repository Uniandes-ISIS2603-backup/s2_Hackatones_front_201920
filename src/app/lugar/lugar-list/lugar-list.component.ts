import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Lugar } from "../lugar";
import { LugarService } from "../lugar.service";
import { ToastrComponentlessModule } from "ngx-toastr";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "lugares-list",
  templateUrl: "./lugar-list.component.html",
  styleUrls: ['./lugar-list.component.css'],
})
export class LugarListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private lugaresService: LugarService, private router :Router) {
  
  }

  /**
   * The list of editorials which belong to the BookStore
   */
   private lista_lugares : Lugar[] = new Array();
  /**
   * Asks the service to update the list of editorials
   */
  getLugares(): void {
    this.lugaresService.getLugares().subscribe( lugares => this.lista_lugares = lugares);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getLugares();
  }
}