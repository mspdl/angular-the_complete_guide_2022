import { Component } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent {
  newServerName = "A Server Name";
  newServerContent = "A Server Content Example";
  
  onAddServer() {
    this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
