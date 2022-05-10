import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "darkblue"
    );
    this.renderer.setStyle(this.element.nativeElement, "padding", "1rem");
    this.renderer.setStyle(
      this.element.nativeElement,
      "border-radius",
      "0.5rem"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "aqua"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "black");
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "darkblue"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
  }
}
