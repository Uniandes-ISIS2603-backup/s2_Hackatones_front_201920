import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadoresListComponent } from './patrocinadores-list/patrocinadores-list.component';
import { PatrocinadoresService } from './patrocinadores.service';
import { PatrocinadorDetailComponent } from './patrocinador-detail/patrocinador-detail.component';
import { PatrocinadoresCreateComponent } from './patrocinadores-create/patrocinadores-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule
  ],
  declarations: [PatrocinadoresListComponent, PatrocinadorDetailComponent, PatrocinadoresCreateComponent],
  exports: [PatrocinadoresListComponent, PatrocinadorDetailComponent, PatrocinadoresCreateComponent],
  providers: [PatrocinadoresService]

})
export class PatrocinadoresModule { }