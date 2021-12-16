import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginHeaderInterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const regExPattern = /\/api\//;
    const liveApiUrl = /api2\.createdigitalsolutions\./;
    if (regExPattern.test(request.url) || liveApiUrl.test(request.url)) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'x-access-token': this.cookieService.get('auth')
        }
      });
    }

    return next.handle(request);
  }
}
