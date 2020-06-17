import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatedialogueComponent } from './createdialogue/createdialogue.component';
import { ReaddialogueComponent } from './readdialogue/readdialogue.component';
import { UpdatedialogueComponent } from './updatedialogue/updatedialogue.component';
import { DeletedialogueComponent } from './deletedialogue/deletedialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatedialogueComponent,
    ReaddialogueComponent,
    UpdatedialogueComponent,
    DeletedialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
