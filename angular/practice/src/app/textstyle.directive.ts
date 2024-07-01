import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextstyle]',
})
export class TextstyleDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementref: ElementRef) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementref.nativeElement,
      'text-align',
      'center'
    );
  }
}
