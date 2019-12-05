import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadoresListComponent } from './patrocinadores-list/patrocinadores-list.component';
import { PatrocinadoresService } from './patrocinadores.service';
import { PatrocinadorDetailComponent } from './patrocinador-detail/patrocinador-detail.component';
import { PatrocinadoresCreateComponent } from './patrocinadores-create/patrocinadores-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule, NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [PatrocinadoresListComponent, PatrocinadorDetailComponent, PatrocinadoresCreateComponent],
  exports: [PatrocinadoresListComponent, PatrocinadorDetailComponent, PatrocinadoresCreateComponent],
  providers: [PatrocinadoresService]

})
export class PatrocinadoresModule { }