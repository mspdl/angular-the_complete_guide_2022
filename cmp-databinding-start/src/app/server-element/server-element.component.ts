import { Component, Input } from "@angular/core";
import { serverElement } from "../shared/server-element.model";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent {
  @Input('srvElement') element: serverElement;
}
