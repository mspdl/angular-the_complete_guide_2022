import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "blue"
    );
    this.renderer.setStyle(this.element.nativeElement, "padding", "1rem");
    this.renderer.setStyle(
      this.element.nativeElement,
      "border-radius",
      "0.5rem"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
  }
}
