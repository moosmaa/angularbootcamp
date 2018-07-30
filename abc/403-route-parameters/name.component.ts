import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  template: `
    <section class="card">
      <div class="card-content">
        <div class="card-title">Hello {{message | async}}</div>
        <p>This is a less simple example component.</p>
      </div>
    </section>
  `
})
export class NameComponent {
  message: Observable<string>;

  constructor(route: ActivatedRoute) {
    console.log('Creating new instance of NameComponent');
    this.message = route.params
      .do(params => console.log('Got new value for params', params))
      .map(params => {
        return params['helloTarget'];
      });
  }
}
