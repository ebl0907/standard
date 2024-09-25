// src/app/core/auth.service.ts
import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.apiHostUrl}api/auth`;
  readonly headers = new HttpHeaders({
    'Content-Type': 'application/vnd.api+json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT,PATCH,HEAD',
    'Cache-Control': 'no-cache',
    'Access-Allow-Control-Origin': '*',
  });
  dateExpiration!: string;
  roles: string[] = [];
  constructor(private http: HttpClient, public router: Router) {}

  login(username: string, password: string) {
    sessionStorage.removeItem('ENSGESTOR');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const jwtHelper = new JwtHelperService();

    this.http
      .post<any>(`${this.url}/signin`, { username, password }, { headers })
      .pipe(
        switchMap((response) => {
          sessionStorage.setItem('TOKEN', response.token);
          const jsonToken = jwtHelper.decodeToken(response.token);
          jsonToken.exp ? this.dateExpiration = jsonToken.exp : this.dateExpiration = '';
          if(jsonToken.roles){
            this.roles = jsonToken.roles.map((rol: any) => {
              return rol.code;
            });
          }
          return from(this.router.navigate(['/home']));
        })
      )
      .subscribe({
        next: () => {},
        error: (error) => {},
      });
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token;  // Devuelve true si el token existe, false si no.
  }

  isAdmin(): boolean {
    return this.roles.includes('ROLE_ADMIN');
  }

  isTokenExpired(): boolean {
    const tokenExpiration = Number.parseInt(this.dateExpiration, 10);
    const actualDate = Math.floor(Date.now() / 1000);
    if (isNaN(tokenExpiration) || !tokenExpiration) {
      return true;
    } else return tokenExpiration < actualDate;
  }

  getToken(): string {
    const token = sessionStorage.getItem('TOKEN');
    if (!this.isTokenExpired() && token) return token;
    else {
      this.router.navigate(['/login']);
      return '';
    }
  }
}
