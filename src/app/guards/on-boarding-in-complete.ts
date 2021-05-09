import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {filter, map, take} from 'rxjs/operators';
import {AuthRepository} from '../repository/auth-repository';

@Injectable()
export class OnBoardingInComplete implements CanActivate {
  constructor(private authRepo: AuthRepository, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authRepo.fetchMe().pipe(filter(data => !!data)
      , map(data => {
        if (data.onboarding !== 200) {
          return true;
        } else {
          this.router.navigate(['dashboard','resume']);
        }
      }));
  }

}
