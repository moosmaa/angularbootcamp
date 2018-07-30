import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NameComponent } from './name.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello/:helloTarget', component: NameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
