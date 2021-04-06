import { Component } from '@angular/core';
import { IncrementDecrementService } from './increment-decrement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'karma-test-async';
  value: number = 0;
  message!: string;

  constructor() {}
  increment() {
    setTimeout(() => {
      if (this.value < 15) {
        this.value += 1;
        this.message = '';
      } else {
        this.message = 'Maximum reached!';
      }
    }, 5000); // wait 5 seconds to increment the value
  }

  setTitle() {
    new Promise((resolve) => {
      resolve('One crazy app!');
    }).then((val) => {
      this.title = <string>val;
    });
  }
}
