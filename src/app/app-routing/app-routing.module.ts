import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { PatrocinadorDetailComponent } from '../patrocinadores/patrocinador-detail/patrocinador-detail.component';
import { PatrocinadoresListComponent } from '../patrocinadores/patrocinadores-list/patrocinadores-list.component';
import { PatrocinadoresCreateComponent } from '../patrocinadores/patrocinadores-create/patrocinadores-create.component';

import { LenguajeDetailComponent } from '../lenguaje/lenguaje-detail/lenguaje-detail.component';
import { LenguajeListComponent } from '../lenguaje/lenguaje-list/lenguaje-list.component';

import { LugarDetailComponent } from "../lugar/lugar-detail/lugar-detail.component";
import { LugarListComponent } from "../lugar/lugar-list/lugar-list.component";
import {LugarCreateComponent} from '../lugar/lugar-create/lugar-create.component';
import { HackatonListComponent } from '../hackaton/hackaton-list/hackaton-list.component';
import { HackatonDetailComponent } from '../hackaton/hackaton-detail/hackaton-detail.component';
import { HackatonCreateComponent } from '../hackaton/hackaton-create/hackaton-create.component';

import { InteresDetailComponent} from "../intereses/interes-detail/interes-detail.component";
import { InteresListComponent } from "../intereses/interes-list/interes-list.component";
import {InteresCreateComponent} from '../intereses/interes-create/interes-create.component';

import { EquipoDetailComponent} from "../equipo/equipo-detail/equipo-detail.component";
import { EquipoListComponent } from "../equipo/equipo-list/equipo-list.component";
import {EquipoCreateComponent} from '../equipo/equipo-create/equipo-create.component';
import { TecnologiaDetailComponent } from '../tecnologia/tecnologia-detail/tecnologia-detail.component';
import { TecnologiaListComponent } from '../tecnologia/tecnologia-list/tecnologia-list.component';
import { TecnologiaCreateComponent } from '../tecnologia/tecnologia-create/tecnologia-create.component';
import { TecnologiaEditComponent } from '../tecnologia/tecnologia-edit/tecnologia-edit.component';


const routes: Routes = [
    {
        path: "lugares",
        children: 
           [
            {
             path: "list",
             component: LugarListComponent
            },
            {
                path: ":id",
                component: LugarDetailComponent,
                outlet: "detail"
            },
            {
                path: 'add',
                component: LugarCreateComponent
            }

           ]
    },
    {
        path: "hackaton",
        children: 
           [
            {
             path: "list",
             component: HackatonListComponent
            },
            {
                path: ":id",
                component: HackatonDetailComponent,
                outlet: "detail"
            },
            {
                path: 'add',
                component: HackatonCreateComponent
            }

           ]
    },
    {
        path: "interes",
        children: 
           [
            {
             path: "list",
             component: InteresListComponent
            },
            {
                path: ":id",
                component: InteresDetailComponent,
                outlet: "detail"
            },
            {
                path: 'add',
                component: InteresCreateComponent
            }

           ]
    },
    {
            path: 'lenguajes',
            children: [{
              path: 'list',
              component: LenguajeListComponent
            },
            {
              path: ':id',
              component: LenguajeDetailComponent,
              outlet: 'detail'
            }
            ]
          },
    {
        path: 'patrocinadores',
            children: 
            [
                {
                path: 'list',
                component: PatrocinadoresListComponent
               },
               {
               path: ':id',
                component: PatrocinadorDetailComponent,
                outlet: 'detail'
               },
               {
                path: 'add',
                component: PatrocinadoresCreateComponent
            }
           ]
    },
    {
        path: 'tecnologias',
        children: [
            {
                path: 'list',
                component: TecnologiaListComponent
            },
            {
                path:':id',
                component: TecnologiaDetailComponent,
                outlet: 'detail'
            },
            {
                path:'add',
                component: TecnologiaCreateComponent
            },
            {
                path: ':id/edit',
                component: TecnologiaEditComponent
            }
        ]
    },
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'home',
                component: AuthLoginComponent
            },
            {
                path: '**',
                redirectTo: 'home',
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}