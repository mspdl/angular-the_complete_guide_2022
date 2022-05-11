import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultColor = { background: "#777", text: "#EEE" };
  @Input() highlightColor: { background: string; text: string };

  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor.background;
  @HostBinding("style.borderRadius") borderRadius: string = "0.5rem";
  @HostBinding("style.padding") padding: string = "1rem";
  @HostBinding("style.color") color: string = this.defaultColor.text;

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
    this.backgroundColor = this.highlightColor.background;
    // this.renderer.setStyle(this.element.nativeElement, "color", "darkblue");
    this.color = this.highlightColor.text;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "darkblue"
    // );
    this.backgroundColor = this.defaultColor.background;
    // this.renderer.setStyle(this.element.nativeElement, "color", "#EEE");
    this.color = this.defaultColor.text;
  }
}
