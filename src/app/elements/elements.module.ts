import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './elements-home/element-home.component';


@NgModule({
  declarations: [
    ElementHomeComponent
  ],
  exports: [
    ElementHomeComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
})
export class ElementsModule { }
