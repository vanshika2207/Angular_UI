import {
  Directive,
  input,
  inject,
  effect,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //accesss to content of template //where to render what
  private viewContainerRef = inject(ViewContainerRef); //where
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('show element');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
