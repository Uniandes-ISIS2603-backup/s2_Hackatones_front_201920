import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {InteresService} from './interes.service';
import {InteresListComponent} from './interes-list/interes-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {InteresDetailComponent} from './interes-detail/interes-detail.component';
import {InteresCreateComponent} from './interes-create/interes-create.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        NgxPermissionsModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        InteresListComponent, InteresDetailComponent, InteresCreateComponent
    ],
    providers: [InteresService]
})
export class InteresModule {}