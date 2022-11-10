import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';


@NgModule({
    declarations: [
        ModsHomeComponent
    ],
    exports: [
        ModsHomeComponent
    ],
    imports: [
        CommonModule,
        ModsRoutingModule,
      SharedModule
    ]
})
export class ModsModule { }
