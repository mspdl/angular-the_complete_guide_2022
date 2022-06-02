import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  currentUser = undefined;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login();
    this.currentUser = "Morgan";
  }
  onLogout() {
    this.authService.logout();
    this.currentUser = undefined;
  }
}
