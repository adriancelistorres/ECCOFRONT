import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private readonly apiUrl = 'https://localhost:7169/api/'
  constructor(
    private http: HttpClient
  ) { }

  getCountry(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}Country`);
    //return this.http.get<any>('https://localhost:7169/api/Country',this.httpOptions);
  }

  // getTicketsPendientes(id: number) {
  //   const headers = new HttpHeaders().set('no-loading-spinner', 'true');
  //   return this.http
  //   .get<ResponseDTO>(`${environment.api}/incidenciaAsignaciones/getTicketsPendientes/` + id , { headers })
  //   .pipe(
  //     map((response) => {       
  //       return response;
  //     })
  //   );
  // }
}
