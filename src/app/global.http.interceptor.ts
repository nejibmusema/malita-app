import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@malita/authentication';
import { NotificationService } from './shared';

enum ErrorMessage {
  Error400 = 'Unknown error',
  Error401 = 'User is not authenticated',
  Error403 = 'Forbidden request has been made',
  Error404 = 'API not found',
  Error500 = 'There is internal Server error',
}

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this._authService.readAuthTokenFromStorage();
    let modifiedRequest = request;
    if (authToken) {
      modifiedRequest = request.clone({
        headers: request.headers.append(`Authorization`, `Bearer ${authToken}`),
      });
    }

    return next.handle(modifiedRequest).pipe(
      catchError((error) => {
        let title: string | ErrorMessage = 'Unknown error';
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            title = 'Error Event';
          } else {
            title =
              error.error?.message ?? ErrorMessage[`Error${error.status}`];
            if (error.status === 401) {
              // if 401 we redirect the user to login page
              this._authService.redirectToLogin();
            }
          }
        }
        this._notificationService.openSnackBar(title, 'close');
        return throwError(() => error);
      })
    );
  }
}
