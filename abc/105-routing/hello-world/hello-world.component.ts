import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Hello World Functionality</span>
        <div>Search for Hello World Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})

export class HelloWorldComponent {}