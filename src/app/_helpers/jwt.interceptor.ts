import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Acces-Control-Allow-Origin': '*',
          'Acces-Control-Allow-Methodes': 'GET,POST,PUT,DELETE',
          'Acces-Control-Allow-Headers': 'Content-Type',
          'Authorization': `Bearer ${currentUser.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
