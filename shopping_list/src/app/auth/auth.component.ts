import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.css'],
})
export class AuthComponent {
  isLoggedIn = true;

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
