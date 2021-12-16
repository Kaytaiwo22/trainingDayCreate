import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailsService } from './user-details.service';
import { Observable } from 'rxjs';

@Injectable()
export class VerifiedAsLoggedInService implements CanActivate {
  constructor(
    public router: Router,
    private cookieService: CookieService,
    private userDetailsService: UserDetailsService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, preventDefault?): Observable<boolean> {
    return new Observable(observer => {
      if (!this.cookieService.get('auth')) {
        if (preventDefault !== true) {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        observer.next(false);
      } else {
        this.userDetailsService.getUserDetails().subscribe(
          () => {
            observer.next(true);
          },
          () => {
            if (preventDefault !== true) {
              this.cookieService.delete('auth', '/');
              this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            }
            observer.next(false);
          }
        );
      }
    });
  }
}
