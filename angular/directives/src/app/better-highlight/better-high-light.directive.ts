import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]',
})
export class BetterHighLightDirective implements OnInit {
  constructor(private elementref: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementref.nativeElement,
    //   'background-color',
    //   'lightpink'
    // );
  }
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'cyan';
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementref.nativeElement,
    //   'background-color',
    //   'lightpink'
    // );
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleft(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementref.nativeElement,
    //   'background-color',
    //   'lightgreen'
    // );
    this.backgroundColor = this.highlightColor;
  }
}
