import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'email', pathMatch: 'full' },
  { path: 'help', loadChildren: './help/help.module#HelpModule' },
  { path: 'email', loadChildren: './email/email.module#EmailModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
