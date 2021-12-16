import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class UserDetailsService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  getUserDetails() {
    return this.http.get('https://api2.createdigitalsolutions.com/clientAccount/60dafcc14b162471912edc48');
  }

  logOut(doNotSendHome?: boolean) {
    this.cookieService.delete('auth', '/');
    if (!doNotSendHome) {
      this.router.navigate(['/']);
    }
  }
}
