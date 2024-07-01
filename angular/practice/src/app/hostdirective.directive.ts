import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostdirective]',
})
export class HostdirectiveDirective {
  constructor(public rendered: Renderer2, public elementref: ElementRef) {}
  @HostListener('mouseenter') mouseover(event: Event) {
    this.rendered.setStyle(
      this.elementref.nativeElement,
      'background-color',
      'pink'
    );
  }
  @HostBinding('style.backgroundColor') background: string = 'purple';
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.background = 'yellow';
  }
}
