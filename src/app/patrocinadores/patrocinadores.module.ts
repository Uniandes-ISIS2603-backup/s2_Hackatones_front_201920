import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadoresListComponent } from './patrocinadores-list/patrocinadores-list.component';
import { PatrocinadoresService } from './patrocinadores.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadoresListComponent],
  exports: [PatrocinadoresListComponent],
  providers: [PatrocinadoresService]

})
export class PatrocinadoresModule { }
