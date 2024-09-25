import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Injectable({providedIn: 'root'})
export class AdminGuard {
  authService: AuthService  = inject(AuthService);
  router: Router = inject(Router);
  canActivate: CanActivateFn = (route, state) => {
    return this.authService.isAdmin() ? true : this.redirect(state, '/home');
  };

  canActivateChild: CanActivateChildFn = (route, state) => {
    return this.authService.isAdmin() ? true : this.redirect(state, '/home');
  };

  private redirect(state: any, defaultUrl: string){
    if(state.url.endsWith('/edit')){
      const newUrl = state.url.replace('/edit', '');
      return this.router.navigate([newUrl]);
    }else{
      return this.router.navigate([defaultUrl]);
    }
  }
}