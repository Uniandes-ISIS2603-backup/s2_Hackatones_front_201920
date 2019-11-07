import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { InteresesListComponent } from "./intereses-list/intereses-list.component";

import { InteresesService } from "./intereses.service";
import { FormsModule } from '@angular/forms';
import { InteresesDetailComponent } from './intereses-detail/intereses-detail.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [InteresesListComponent, InteresesDetailComponent],
    providers: [InteresesService],
    exports:[InteresesListComponent]
})
export class InteresesModule {}
