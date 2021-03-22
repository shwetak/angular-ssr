import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {environment} from './../environments/environment';
import {isPlatformBrowser} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId) {


  }
  title = 'service';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    }

  }
}
