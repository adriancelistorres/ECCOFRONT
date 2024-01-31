import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-two',
  templateUrl: './login-two.component.html',
  styleUrl: './login-two.component.css'
})
export class LoginTwoComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private router: Router
  ){
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  getLogin(){
    this.router.navigate(['/auth/loginThree']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
