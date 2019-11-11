import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {LugarService} from './lugar.service';
import {LugarListComponent} from './lugar-list/lugar-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {LugarDetailComponent} from './lugar-detail/lugar-detail.component';
import {LugarCreateComponent} from './lugar-create/lugar-create.component';



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
        LugarListComponent, LugarDetailComponent, LugarCreateComponent
    ],
    providers: [LugarService]
})
export class LugarModule {}