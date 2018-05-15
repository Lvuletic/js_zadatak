import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { ZadatakDialogComponent } from './zadatak-dialog/zadatak-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { ZadatakDetailComponent } from './zadatak-detail/zadatak-detail.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ZadatakDialogComponent,
    DeleteConfirmComponent,
    ZadatakDetailComponent,
    MainComponent
  ],
  entryComponents: [
    ZadatakDialogComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule, HttpModule, DataTablesModule, NgbModule.forRoot(), FormsModule, ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
