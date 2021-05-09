import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthUtils} from '../utility/auth-utils';
import {filter, map} from 'rxjs/operators';
import {AuthRepository} from '../repository/auth-repository';

@Injectable()
export class AnonGuard implements CanActivate {
  constructor(private router: Router, private authRepo: AuthRepository) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!AuthUtils.getAuthToken()) {
      return true;
    } else {
      const user$ = this.authRepo.fetchMe();
      return user$.pipe(filter(data => !!data), map(data => {
        if (!data.verified) {
          this.router.navigate(['verify']);
        } else if (data.onboarding !== 200) {
          this.router.navigate(['on-boarding']);
        } else {
          this.router.navigate(['dashboard','resume']);
        }
      }));
    }
  }

}
