import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  currentUser = undefined;
  constructor(private router: Router, private authService: AuthService) {}

  onLoadServer(id: number) {
    // imagine some actions here
    this.router.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "loading",
    });
  }
  onLogin() {
    this.authService.login();
    this.currentUser = "Morgan";
  }
  onLogout() {
    this.authService.logout();
    this.currentUser = undefined;
  }
}
