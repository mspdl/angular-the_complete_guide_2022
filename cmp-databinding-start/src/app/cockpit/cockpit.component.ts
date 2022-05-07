import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from "@angular/core";

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

  @ViewChild("newName") newNameInput: ElementRef;

  onAddServer(newContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.newNameInput.nativeElement.value,
      serverContent: newContent.value,
    });
  }

  onAddBlueprint(newContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: this.newNameInput.nativeElement.value,
      blueprintContent: newContent.value,
    });
  }
}
