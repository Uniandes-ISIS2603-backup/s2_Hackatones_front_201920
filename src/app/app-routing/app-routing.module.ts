import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { PatrocinadorDetailComponent } from '../patrocinadores/patrocinador-detail/patrocinador-detail.component';
import { PatrocinadoresListComponent } from '../patrocinadores/patrocinadores-list/patrocinadores-list.component';

import { LugarDetailComponent } from "../lugar/lugar-detail/lugar-detail.component";
import { LugarListComponent } from "../lugar/lugar-list/lugar-list.component";
const routes: Routes = [

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
    },
    {
        path: 'patrocinadores',
        children: [{
          path: 'list',
          component: PatrocinadoresListComponent
        },
        {
          path: ':id',
          component: PatrocinadorDetailComponent,
          outlet: 'detail'
        }
        ]
      },
      {
        path: "lugares",
        children: [
          {
            path: "list",
            component: LugarListComponent
          },
          {
            path: ":id",
            component: LugarDetailComponent,
            outlet: "detail"
          }
        ]
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
