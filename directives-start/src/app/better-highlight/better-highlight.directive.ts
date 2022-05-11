import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "darkblue";
  @HostBinding("style.borderRadius") borderRadius: string = "0.5rem";
  @HostBinding("style.padding") padding: string = "1rem";
  @HostBinding("style.color") color: string = "#EEE";

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "darkblue"
    // );
    // this.renderer.setStyle(this.element.nativeElement, "padding", "1rem");
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "border-radius",
    //   "0.5rem"
    // );
    // this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "aqua"
    // );
    this.backgroundColor = "aqua";
    // this.renderer.setStyle(this.element.nativeElement, "color", "darkblue");
    this.color = "darkblue";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "darkblue"
    // );
    this.backgroundColor = "darkblue";
    // this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
    this.color = "#EEE";
  }
}
