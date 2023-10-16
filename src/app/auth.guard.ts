import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from './services/users.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private authService: UsersService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo = this.authService.isAuthenticated();
    const token = JSON.parse(localStorage.getItem('userInfo') || '{}').data?._doc?.role;
    console.log(token);

    if (userInfo?.data?._doc.role === "admin") {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

}
