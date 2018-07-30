import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <footer>
      Footer
    </footer>
  `,
  providers: [Title]
})
export class AppComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event: Event) =>
      console.log('router event!', event));
  }
}
