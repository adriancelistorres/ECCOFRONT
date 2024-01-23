import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrl: './login-one.component.css'
})
export class LoginOneComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router
  ){
    this.loginForm = new FormGroup({
      'country': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'type': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  getLogin(){
    this.router.navigate(['/auth/loginTwo']);
  }
}
