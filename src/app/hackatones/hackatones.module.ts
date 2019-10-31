import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackatonesListComponent } from './hackatones-list/hackaton-list.component';
import { HackatonService } from './hackatones.service';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HackatonDetailComponent } from './hackatones-detail/hackatones-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [HackatonesListComponent,
    HackatonDetailComponent ],
  exports: [HackatonesListComponent],
  providers: [HackatonService]

})
export class HackatonesModule { }
