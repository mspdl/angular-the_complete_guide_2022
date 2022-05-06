import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  newName = "A Server Name";
  newContent = "A Server Content Example";

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newName,
      serverContent: this.newContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newName,
      blueprintContent: this.newContent,
    });
  }
}
