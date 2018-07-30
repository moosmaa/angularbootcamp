import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world.component';
import { SharedModule } from '../shared/shared.module';

const helloWorldRoutes: Routes = [
  { path: '', component: HelloWorldComponent }
];

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  exports: [HelloWorldComponent],         // export COMPONENTS, directives, pipes
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(helloWorldRoutes)
  ]   // import MODULES
})
export class HelloWorldModule { }
