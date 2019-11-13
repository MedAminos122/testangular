import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MeubleComponent } from './meuble/meuble.component';
import { MeubleListComponent } from './meuble-list/meuble-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeubleComponent,
    MeubleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
