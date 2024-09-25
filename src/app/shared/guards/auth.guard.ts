import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";

@Injectable()
export class AuthGuard {
  authService: AuthService  = inject(AuthService);
  router: Router = inject(Router);
  canActivate: CanActivateFn = (route, state) => {
    return this.authService.isAuthenticated() ? true : this.router.navigate(['/login']);
  };

  canActivateChild: CanActivateChildFn = (route, state) => {
    return this.authService.isAuthenticated() ? true : this.router.navigate(['/login']);
  };
}