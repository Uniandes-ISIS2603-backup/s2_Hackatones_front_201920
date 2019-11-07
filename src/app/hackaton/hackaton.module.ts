import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {HackatonListComponent} from './hackaton-list/hackaton-list.component';
import {HackatonCalificacionComponent} from './hackaton-calificacions/hackaton-calificacion.component';
import {HackatonCreateComponent} from './hackaton-create/hackaton-create.component';
import {HackatonDetailComponent} from './hackaton-detail/hackaton-detail.component';
import {HackatonAddCalificacionComponent} from './hackaton-add-calificacion/hackaton-add-calificacion.component';
import {HackatonEditComponent} from './hackaton-edit/hackaton-edit.component';

import {HackatonService} from './hackaton.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        HackatonListComponent, HackatonDetailComponent, HackatonCalificacionComponent, HackatonCreateComponent, HackatonAddCalificacionComponent, HackatonEditComponent
    ],
    providers: [HackatonService],
    exports: [HackatonListComponent, HackatonEditComponent]
})
export class HackatonModule {}