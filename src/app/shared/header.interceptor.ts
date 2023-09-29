import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add headers
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer your-token', // Add your headers here
        'Custom-Header': 'custom-value',
      },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedReq);
  }

  getTokenParam = (): any => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString != null) {
      const userData = JSON.parse(userDataString);
      const queryParams = {
        auth: userData._token,
      };
      const params = new HttpParams({ fromObject: queryParams });
      return params;
    }
    return null;
  };
}
