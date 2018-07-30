import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';
import { AppRoutingModule, ROUTED_COMPONENTS } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ...ROUTED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
