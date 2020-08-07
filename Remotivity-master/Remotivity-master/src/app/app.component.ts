import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remotivity';

  showHeader: boolean = false;
  showFooter: boolean = false;

  ngOnInit() {

  }

  constructor(private router: Router) { 
    // code to hide header/footer on the login and signup pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/signup' || event['url'] == '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/signup' || event['url'] == '/login') {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    });
  }
}
