import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeService } from './lenguaje.service';
import { LenguajeCreateComponent } from './lenguaje-create/lenguaje-create.component';
import { LenguajeDetailComponent } from './lenguaje-detail/lenguaje-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule
  ],
  declarations: [LenguajeListComponent, LenguajeCreateComponent, LenguajeDetailComponent],
  exports: [LenguajeListComponent, LenguajeCreateComponent],
  providers: [LenguajeService]
})
export class LenguajeModule { }