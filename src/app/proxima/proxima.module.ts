import { NgModule } from '@angular/core';
import {BrowserModule} from  '@anuglar/platform-browser';
import {CommonModule} from '@angular/common';
import { ProximaListComponent } from './proxima-list/proxima-list.component';
import {ProximaCreateComponent} from './proxima-create/proxima-create.component';
import {ProximaService} from '/.proxima.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule, ReactiveFormsModule
  ],
  declarations: [ProximaListComponent],
  exports:[
    ProximaCreateComponent
  ],
  providers: [
    ProximaService
  ]
})
export class ProximaModule { }