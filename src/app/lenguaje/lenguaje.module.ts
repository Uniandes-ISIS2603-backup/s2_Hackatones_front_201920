import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeService } from './lenguaje.service';
import { LenguajeCreateComponent } from './lenguaje-create/lenguaje-create.component';
import { LenguajeDetailComponent } from './lenguaje-detail/lenguaje-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';



@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    LenguajeListComponent, 
    LenguajeCreateComponent, 
    LenguajeDetailComponent
  ],
  exports: [LenguajeListComponent, 
    LenguajeCreateComponent],
  providers: [LenguajeService]
})
export class LenguajeModule { }