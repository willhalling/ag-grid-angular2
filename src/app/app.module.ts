import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from 'ag-grid-ng2/main';

import { Typeahead } from 'ng2-typeahead';

import { AppComponent } from './app.component';
import {TypeAheadEditorComponent} from "./TypeAheadEditorComponent";

@NgModule({
  declarations: [
    AppComponent,
    Typeahead,
    TypeAheadEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([TypeAheadEditorComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
