import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HackatonListComponent } from './hackaton-list/hackaton-list.component';
import { HackatonService } from './hackaton.service';
import { HackatonCreateComponent } from './hackaton-create/hackaton-create.component';
import { HackatonDetailComponent } from './hackaton-detail/hackaton-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,FormsModule, AppRoutingModule
  ],
  declarations: [HackatonListComponent, HackatonCreateComponent, HackatonDetailComponent],
  exports: [HackatonListComponent, HackatonCreateComponent],
  providers: [HackatonService]
})
export class HackatonModule { }