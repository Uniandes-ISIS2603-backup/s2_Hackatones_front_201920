import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActualesListComponent } from "./actuales-list/actuales-list.component";
import { ActualesService } from "./actuales.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ActualesListComponent],
  exports: [ActualesListComponent],
  providers: [ActualesService]
})
export class ActualesModule {}
