import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { Country } from '../../../../models/Auth/country';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrl: './login-one.component.css'
})
export class LoginOneComponent implements OnInit {
  loginForm: UntypedFormGroup;
  listCountry: Country[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: UntypedFormBuilder
  ){
    this.loginForm = this.createFormLogin()
  }

  ngOnInit(): void {
    //this.formLogin();
    this.getCountry();
  }

  createFormLogin(): UntypedFormGroup{
    return this.fb.group({
      country: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      type: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  getCountry(){
    // this.authService.getCountry().pipe(
    //   catchError((error) => {
    //     console.error('Error al obtener el país:', error);
    //     // Puedes manejar el error aquí según tus necesidades
    //     throw error; // Re-lanza el error para que pueda ser manejado por la suscripción principal
    //   })
    // ).subscribe((res) => {
    //   console.log(res);
    //   this.listCountry = res;
    //   console.log(this.listCountry);
    // });
    // this.authService.getCountry().subscribe( res => {
    //   console.log(res);
    //   this.listCountry = res;
    //   console.log(this.listCountry);
    // })
    // this.listCountry = this.authService.getCountry().pipe(catchError((error: string) => {
    //   this.errorMessage = error;
    //   return EMPTY;
    // }))
    // this.pokemonResults$ = this.service.getPokemonList().pipe(catchError((error: string) => {
    //   this.errorMessage = error;
    //   return EMPTY;
    // }))
    this.authService.getCountry().pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 0) {
          console.error('Error en la solicitud HTTPS: Certificado no confiable.');
          // Puedes mostrar un mensaje al usuario o realizar acciones específicas.
        } else {
          console.error('Error al obtener el país:', error);
        }
        throw error;
      })
    ).subscribe({
      next: value => console.log('Observable emitted the next value: ' + value),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }

  getLogin(){
    this.router.navigate(['/auth/loginTwo']);
  }
}
