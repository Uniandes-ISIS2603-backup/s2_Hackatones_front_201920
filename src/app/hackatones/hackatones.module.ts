import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackatonesListComponent } from './hackatones-list/hackaton-list.component';
import { HackatonService } from './hackatones.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HackatonesListComponent],
  exports: [HackatonesListComponent],
  providers: [HackatonService]

})
export class HackatonesModule { }
