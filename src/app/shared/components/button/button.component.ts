// src/app/shared/components/button/button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="btn btn-primary"><ng-content></ng-content></button>`,
})
export class ButtonComponent {}
