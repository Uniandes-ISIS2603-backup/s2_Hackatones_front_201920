import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InteresesListComponent } from "./intereses-list/intereses-list.component";
import { InteresesService } from "./intereses.service";

@NgModule({
  imports: [CommonModule],
  declarations: [InteresesListComponent],
  exports: [InteresesListComponent],
  providers: [InteresesService]
})
export class InteresesModule {}
