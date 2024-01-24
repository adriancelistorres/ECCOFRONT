import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  interceptor() {
    const token:any = localStorage.getItem('token'); // Obtener el token del localStorage
 

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}
