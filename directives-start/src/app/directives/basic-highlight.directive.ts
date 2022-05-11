import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
    this.elementRef.nativeElement.style.padding = "1rem";
    this.elementRef.nativeElement.style.borderRadius = "0.5rem";
    this.elementRef.nativeElement.style.color = "#EEE";
  }
}
