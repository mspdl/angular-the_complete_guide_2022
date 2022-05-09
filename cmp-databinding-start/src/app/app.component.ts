import { Component, ViewEncapsulation } from "@angular/core";
import { serverElement } from "./shared/server-element.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  serverElements: serverElement[] = [
    { type: "server", name: "Test server", content: "Just a test!" },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

  onChangeFirst() {
    const randomNumber = Math.ceil(Math.random() * 10);
    this.serverElements[0].name = "Changed to " + randomNumber;
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
