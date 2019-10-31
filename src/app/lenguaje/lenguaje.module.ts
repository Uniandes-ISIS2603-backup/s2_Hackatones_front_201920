import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeService } from './lenguaje.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LenguajeListComponent],
  exports: [LenguajeListComponent],
  providers: [LenguajeService]
})
export class LenguajeModule { }