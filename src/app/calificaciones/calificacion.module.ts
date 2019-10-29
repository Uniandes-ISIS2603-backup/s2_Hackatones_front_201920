import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionesListComponent } from './calificaciones-list/calificacion-list.component';
import { CalificacionesService } from './calificaciones.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionesListComponent],
  exports: [CalificacionesListComponent],
  providers: [CalificacionesService]

})
export class PatrocinadoresModule { }
