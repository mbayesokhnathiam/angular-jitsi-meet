import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './components/call/call.component';
import { EndedCallComponent } from './components/ended-call/ended-call.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    EndedCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
