import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string;
  constructor(private elementref: ElementRef) {}
  ngOnInit(): void {
    this.elementref.nativeElement.style.backgroundColor =
      this.appHighlight || 'green';
    this.elementref.nativeElement.style.color = 'white';
  }
}
