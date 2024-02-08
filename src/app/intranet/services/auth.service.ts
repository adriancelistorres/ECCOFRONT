import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private readonly apiUrl = 'https://localhost:7169/api/'
  private readonly apiUrl = environment.endpointIntranet;
  
  constructor(
    private http: HttpClient
  ) { }

  getCountry(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}Country`);
  }

}
