import { Directive, ElementRef, input, inject } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active');
  }
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  queryParam = input('myapp', { alias: 'appSafeLink' });
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the page?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
