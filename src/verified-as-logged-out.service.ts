import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UserDetailsService } from './user-details.service';

@Injectable()
export class VerifiedAsLoggedOutService implements CanActivate {
  constructor(
    public router: Router,
    private cookieService: CookieService,
    private userDetailsService: UserDetailsService
  ) {}
  canActivate(preventDefault?): Observable<boolean> {
    return new Observable(observer => {
      if (this.cookieService.get('auth')) {
        if (preventDefault !== true) {
          this.router.navigate(['/account']);
        }
        observer.next(false);
      } else {
        this.userDetailsService.getUserDetails().subscribe(
          () => {
            if (preventDefault !== true) {
              this.router.navigate(['/account']);
            }
            observer.next(false);
          },
          () => {
            observer.next(true);
          }
        );
      }
    });
  }
}
