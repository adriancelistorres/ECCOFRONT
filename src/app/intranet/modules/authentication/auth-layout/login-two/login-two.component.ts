import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../../services/auth.service';
import { SecurityService } from '../../../../services/security.service';

@Component({
  selector: 'app-login-two',
  templateUrl: './login-two.component.html',
  styleUrl: './login-two.component.css'
})
export class LoginTwoComponent implements OnInit {
  loginForm: UntypedFormGroup;
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService,
    private securityService: SecurityService,
    private fb: UntypedFormBuilder
  ){
    this.loginForm = this.createFormLogin()
  }

  ngOnInit(): void {
    //this.formLogin();
    // this.getCountry();
  }

  // getCountry(){
  //   this.authService.getCountry().subscribe( res => {
  //     console.log(res);
      
  //   })
  // }

  createFormLogin(): UntypedFormGroup{
    return this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  // formControl = new UntypedFormControl('', [
  //   Validators.required
  // ])

  // getErrorMessage(){
  //   return this.formControl.hasError('required')
  //   ? 'Campo Requerido'
  //   : '';
  // }

  getLogin(){
    console.log(this.loginForm.getRawValue());
    
    this.securityService.authentication().subscribe(res => {
      console.log(res.token);
      console.log(res.expirationDate);
      //this.cookieService.set('token', res.token);
      this.router.navigate(['/auth/loginThree']);
    })
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
