import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardianGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');

      if (!token) {
        // Si no hay token en el localStorage, redirige a la página de inicio de sesión
        return this.router.parseUrl('/authIn');
      }

      // Si hay token en el localStorage, permite el acceso a la ruta
      return true;
    } else {
      console.log('');
      return false;
    }
  }
}
