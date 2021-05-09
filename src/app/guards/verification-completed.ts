import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {filter, map, take} from 'rxjs/operators';
import {ApiService} from '../services/api-service';
import {AuthRepository} from '../repository/auth-repository';

@Injectable()
export class VerificationCompleted implements CanActivate {
  constructor(private authRepo: AuthRepository, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authRepo.fetchMe().pipe( filter(data => !!data), map(data => {
      if (data.verified) {
        return true;
      } else {
        this.router.navigate(['verify']);
      }
    }));
  }

}
