import { Component, OnInit } from "@angular/core";
import { Actual } from "../actual";
import { ActualesService } from "../actuales.service";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "app-actuales-list",
  templateUrl: "./actuales-list.component.html"
})
export class ActualesListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private actualesService: ActualesService) {}

  /**
   * The list of editorials which belong to the BookStore
   */
  actuales: Actual[];

  /**
   * Asks the service to update the list of editorials
   */
  getActuales(): void {
    this.actualesService.getActuales().subscribe(actuales => (this.actuales = actuales));
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getActuales();
  }
}
