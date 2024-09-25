import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Directive({
  selector: '[appOnlyAdmin]'
})
export class OnlyAdminDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  @Input() set appOnlyAdmin(condition: boolean) {
    const isAdmin = this.authService.isAdmin(); // Método que verifica si es admin
    if ((isAdmin && !this.hasView) || !condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isAdmin && this.hasView && condition) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
