import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
})
export class StructuralDirective {
  @Input() set appStructural(condition: boolean) {
    if (!condition) {
      this.vcref.createEmbeddedView(this.template);
    } else {
      this.vcref.clear();
    }
  }

  constructor(
    public template: TemplateRef<any>,
    public vcref: ViewContainerRef
  ) {}
}
