import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipanteListComponent } from './participante-list/participante-list.component';
import { ParticipanteService } from './participante.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParticipanteListComponent],
  exports: [ParticipanteListComponent],
  providers: [ParticipanteService]
})
export class ParticipanteModule { }