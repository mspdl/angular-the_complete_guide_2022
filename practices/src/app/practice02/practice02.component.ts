import { Component } from '@angular/core';

@Component({
  selector: 'practice02',
  templateUrl: './practice02.component.html',
  styleUrls: ['./practice02.component.css'],
})
export class Practice02Component {
  username = '';

  cleanUsername() {
    this.username = '';
  }
}
