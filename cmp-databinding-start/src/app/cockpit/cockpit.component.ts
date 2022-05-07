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
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newName = "New Name";
  newContent = "New Content Example";

  onAddServer(newName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newName.value,
      serverContent: this.newContent,
    });
  }

  onAddBlueprint(newName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: newName.value,
      blueprintContent: this.newContent,
    });
  }
}
