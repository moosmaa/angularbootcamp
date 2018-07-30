import { Routes } from '@angular/router';

import { PeopleComponent } from './people.component';
import { CompaniesComponent } from './companies.component';

export const contactRoutes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'companies', component: CompaniesComponent }
];

export const CONTACT_ROUTED_COMPONENTS = [PeopleComponent, CompaniesComponent];
