import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.css'],
})
export class AuthComponent {
  isLoggedIn = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoggedIn) {
    } else {
      this.authService.signup(email, password).subscribe({
        next(response) {
          console.log(response);
        },
        error(error) {
          console.error(error);
        },
      });
    }

    form.reset();
  }
}
