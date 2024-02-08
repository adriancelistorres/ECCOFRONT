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
    this.authService.getCountry().subscribe((res) => {
      //console.log(res);
      this.listCountry = res;
      //console.log(this.listCountry);
    });
  }

  getLogin(){
    this.router.navigate(['/auth/loginTwo']);
  }
}
