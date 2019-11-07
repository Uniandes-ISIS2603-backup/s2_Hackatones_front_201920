import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { LugarListComponent } from "./lugar-list/lugar-list.component";
import { ReactiveFormsModule } from '@angular/forms';

import { LugarService } from "./lugar.service";
import { FormsModule } from '@angular/forms';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import { LugarCreateComponent } from './lugar-create/lugar-create.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [LugarListComponent, LugarDetailComponent, LugarCreateComponent],
    providers: [LugarService],
    exports:[LugarListComponent, LugarCreateComponent]
})
export class LugarModule {}
