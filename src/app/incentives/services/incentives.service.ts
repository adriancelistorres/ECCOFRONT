import { Injectable } from '@angular/core';
import { TokenInterceptorService } from '../core/interceptors/token-interceptor.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { IIncentivoPagoRequest } from '../models/IIncentivoPagoReques';
import { IIncentivoVista } from '../models/IIncentivoVista';

@Injectable({
  providedIn: 'root'
})
export class IncentivesService {
  private apiUrl: string;
  private token?: string;

  constructor(
    private http: HttpClient,
    private _tokenservice: TokenInterceptorService
  ) {
    this.apiUrl = environment.endpoint + 'api/Incentivos/';
  }

  login(usuario: string, clave: string): Observable<any> {
    const request: IIncentivoPagoRequest = { USUARIO: usuario, CLAVE: clave }; 

    return this.http.post<any>(this.apiUrl + 'validateUser', request).pipe(
      tap((response) => {
        const token = response.token;
        localStorage.setItem('token', token); 
      })
    );
  }

  getIncentivosConfirmationFalse(dni: any): Observable<IIncentivoVista[]> {
    // console.log('tokken',this._tokenservice.interceptor())
    const request: IIncentivoPagoRequest = { Dni: dni };
    return this.http.post<IIncentivoVista[]>(
      this.apiUrl + 'GeneralWithDNIConfirmationFalse',
      request,this._tokenservice.interceptor()
    );
  }

  getIncentivosPremios(dni: any): Observable<IIncentivoVista[]> {
    // console.log('tokken',this._tokenservice.interceptor())
    const request: IIncentivoPagoRequest = { Dni: dni };
    return this.http.post<IIncentivoVista[]>(
      this.apiUrl + 'GetIncentivosPremios',
      request,this._tokenservice.interceptor()
    );
  }


  UpdateIncentivoswithDNI(dni: any, id: any): Observable<IIncentivoVista[]> {
    // Añadir el token en la cabecera "Authorization" de la solicitud
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    // console.log('tokkenupdate',this.token)
    const request: IIncentivoPagoRequest = { Dni: dni, Id: id };
    // console.log('tokkenupdate',this.token)

    return this.http.post<IIncentivoVista[]>(this.apiUrl + 'UpdateWithDNI', request, this._tokenservice.interceptor());
  }
}
