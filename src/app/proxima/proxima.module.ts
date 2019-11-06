import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ProximaListComponent} from './proxima-list/proxima-list.component';
import {ProximaCreateComponent} from './proxima-create/proxima-create.component';
import {ProximaService} from './proxima.service';

@NgModule({
  imports: [
    CommonModule, BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule,
    FormsModule, NgbModule, NgxPermissionsModule
  ],
  declarations: [
    ProximaListComponent, ProximaCreateComponent
  ],
  exports:[
    ProximaListComponent
  ],
  providers: [
    ProximaService
  ]
})
export class ProximaModule { }