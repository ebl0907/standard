import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente o error de red
          errorMessage = `Error: ${error.message}`;
        } else {
          // Error del lado del servidor
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }

        // Aquí puedes mostrar una alerta, mandar el error a un servicio de logging, etc.
        console.error(errorMessage);

        // Lanza el error para que pueda ser manejado por quien llamó al servicio
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
