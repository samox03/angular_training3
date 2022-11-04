import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CollectionsModule} from "./collections/collections.module";
import {ElementsModule} from "./elements/elements.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CollectionsModule,
        ElementsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
