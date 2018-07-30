import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AnnelieseComponent } from './anneliese.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AnnelieseComponent
  ],
  exports: [AnnelieseComponent],         // export COMPONENTS, directives, pipes
  imports: [SharedModule, CommonModule]   // import MODULES
})
export class AnnelieseModule { }
