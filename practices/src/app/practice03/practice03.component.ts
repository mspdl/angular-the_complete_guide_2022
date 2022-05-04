import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'practice03',
  templateUrl: './practice03.component.html',
  styleUrls: ['../app.component.css', './practice03.component.css'],
})
export class Practice03Component {
  showSecretMessage = false;
  logs = [];

  constructor(public datepipe: DatePipe) {}

  changeDisplay() {
    this.showSecretMessage = !this.showSecretMessage;
    const message = this.showSecretMessage
      ? 'Showed message at '
      : 'Hide message at ';
    this.logs.push(
      message + this.datepipe.transform(new Date(), 'dd/MM/yyyy - HH:mm:ss')
    );
  }

  isIndexGreaterThanOrEqualToFive(index) {
    const fixedIndex = index + 1;
    return fixedIndex >= 5 ? true : false;
  }

  getBackgroundColor(index) {
    if (this.isIndexGreaterThanOrEqualToFive(index)) {
      return 'blue';
    }
  }
}
