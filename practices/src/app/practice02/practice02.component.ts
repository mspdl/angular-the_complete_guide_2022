import { Component } from '@angular/core';

@Component({
  selector: 'practice02',
  templateUrl: './practice02.component.html',
  styleUrls: ['../app.component.css'],
})
export class Practice02Component {
  username = '';
  buttonText = 'Insert a username';

  cleanUsername() {
    this.username = '';
    this.updateUsername();
  }

  updateUsername() {
    this.buttonText = this.username ? 'Clean username' : 'Cleaned username';
  }
}
