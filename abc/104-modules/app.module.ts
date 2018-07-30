import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PayrollModule } from './payroll/payroll.module';
import { HrModule } from './hr-files/hr.module';
import { AnnelieseModule } from './anneliese/anneliese.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [PayrollModule, HrModule, AnnelieseModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
