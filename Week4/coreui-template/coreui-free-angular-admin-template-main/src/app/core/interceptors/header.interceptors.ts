import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TOKEN_CYBERSOFT } from 'src/shared/common/constants';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json')
      .set('TokenCybersoft', TOKEN_CYBERSOFT);
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
