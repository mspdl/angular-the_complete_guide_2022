import { Component } from '@angular/core';

@Component({
  selector: 'practice04',
  templateUrl: './practice04.component.html',
  styleUrls: ['./practice04.component.css'],
})
export class Practice04Component {
  oddNumbers = [];
  evenNumbers = [];

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (this.isNumberEven(firedNumber)) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  isNumberEven(number: number) {
    return number % 2 === 0 ? true : false;
  }

  clear() {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
