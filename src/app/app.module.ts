import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import {ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {PatrocinadoresModule} from "./patrocinadores/patrocinadores.module";
import {LenguajeModule} from "./lenguaje/lenguaje.module";
import {UsuarioModule} from "./usuario/usuario.module";
import { LugarModule } from './lugar/lugar.module';
import { InteresModule } from './intereses/interes.module';
import {TecnologiaModule} from './tecnologia/tecnologia.module';
import { HackatonModule } from "./hackaton/hackaton.module";
import { EquipoModule } from "./equipo/equipo.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        LugarModule,
        EquipoModule,
        InteresModule,
        FormsModule,
        TecnologiaModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        PatrocinadoresModule,
        LenguajeModule,
        UsuarioModule,
        HackatonModule

    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
