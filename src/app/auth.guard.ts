import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('user')) {
      const role = JSON.parse(sessionStorage.getItem('user')!).role
      if (route.data['role'] && route.data['role'].indexOf(role) === -1) {
        this.router.navigate(['/annonce']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/home'])
    return false;
  }

}
