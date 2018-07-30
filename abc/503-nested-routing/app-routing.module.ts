import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { ContactsComponent } from './contact-manager/contacts.component';
import { contactRoutes, CONTACT_ROUTED_COMPONENTS } from './contact-manager/contact.routes';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: contactRoutes
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on to for console.logging of route events
};

export const ROUTED_COMPONENTS = [WelcomeComponent, ContactsComponent, ...CONTACT_ROUTED_COMPONENTS];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

