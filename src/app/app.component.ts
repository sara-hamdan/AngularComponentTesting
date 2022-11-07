import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ComponentTesting';
  value = 0;
  message !: string;

  increment() {
    if(this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum Reached';
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }

}
