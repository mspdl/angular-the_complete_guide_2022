import { Component } from "@angular/core";
import { serverElement } from "./shared/server-element.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: serverElement[] = [
    { type: "server", name: "Test server", content: "Just a test!" },
  ];
}
