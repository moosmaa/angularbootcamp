import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// these components can now all talk to eachother
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search/search-box.component';
import { HrFilesSearchComponent } from './hr-files/hr-files-search.component';
import { PayrollSearchComponent } from './payroll/payroll-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HrFilesSearchComponent,
    PayrollSearchComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
