import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor 
{
	constructor(private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler)
	{
		let authReq = req;
		const token = this.authService.getToken();

		if (token != null)
			authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
		authReq.headers.append("Cache-Control", "no-cache");
		return next.handle(authReq);
	}
}