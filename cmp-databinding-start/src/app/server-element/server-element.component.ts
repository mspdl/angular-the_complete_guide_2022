import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { serverElement } from "../shared/server-element.model";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: serverElement;
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log(
      "Heading on ngOnInit: " + this.header?.nativeElement?.textContent
    );
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log(
      "Heading on ngAfterViewInit: " + this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
