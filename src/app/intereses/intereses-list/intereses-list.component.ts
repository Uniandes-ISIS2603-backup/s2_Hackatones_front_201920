import { Component, OnInit } from "@angular/core";
import { Intereses } from "../intereses";
import { InteresesService } from "../intereses.service";

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: "app-intereses-list",
  templateUrl: "./intereses-list.component.html"
})
export class InteresesListComponent implements OnInit {
  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private interesesService: InteresesService) {}

  /**
   * The list of editorials which belong to the BookStore
   */
  intereses: Intereses[];

  /**
   * Asks the service to update the list of editorials
   */
  getIntereses(): void {
    this.interesesService.getIntereses().subscribe(intereses => (this.intereses = intereses));
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getIntereses();
  }
}
