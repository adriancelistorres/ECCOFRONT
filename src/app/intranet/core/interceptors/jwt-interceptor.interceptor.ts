import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SecurityService } from '../../services/security.service';

export const jwtInterceptor: HttpInterceptorFn = (
  req, 
  next
  ) => {
    const cookieService = inject(CookieService);
    const securityService = inject(SecurityService)
    const router = inject(Router)

    const token: string = cookieService.get('token');

    if(token){
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(authReq);
    }else{
      return next(req);
    }
    
};
