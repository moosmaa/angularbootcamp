import { Component } from '@angular/core';

@Component({
  selector: 'anneliese',
  template: `
    <input #anneliese_input value="Anneliese" (keyup)="0">
    <div class="card">
      <div class="card-content">
        <span class="card-title">{{ anneliese_input.value }} Functionality</span>
        <div>Search for {{ anneliese_input.value }} Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class AnnelieseComponent { 
}


