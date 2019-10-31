import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LugaresListComponent } from "./lugar-list/lugar-list.component";
import { LugarService } from "./lugar.service";

@NgModule({
  imports: [CommonModule],
  declarations: [LugaresListComponent],
  exports: [LugaresListComponent],
  providers: [LugarService]
})
export class LugarModule {}
