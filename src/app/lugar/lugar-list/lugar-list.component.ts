import { Component, OnInit } from "@angular/core";
import { Lugar } from "../lugar";
import { LugarService } from "../lugar.service";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "app-lugares-list",
  templateUrl: "./lugar-list.component.html"
})
export class LugaresListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private lugaresService: LugarService) {}

  /**
   * The list of editorials which belong to the BookStore
   */
  lugares: Lugar[];

  /**
   * Asks the service to update the list of editorials
   */
  getLugares(): void {
    this.lugaresService.getLugares().subscribe(lugares => (this.lugares = lugares));
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getLugares();
  }
}
