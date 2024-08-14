import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
  inject,
  ElementRef,
  ContentChild,
  contentChild,
  AfterViewInit,
  AfterContentInit,
  afterRender,
  ɵinternalAfterNextRender,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // @HostBinding('class') className = 'control';
  private el = inject(ElementRef);
  @HostListener('click')
  onClick() {
    console.log('clicked');
    console.log(this.el); //access to nativeElement
    console.log(this.control());
  }
  ngAfterContentInit(): void {
    console.log('After content init');
  }
  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
}
