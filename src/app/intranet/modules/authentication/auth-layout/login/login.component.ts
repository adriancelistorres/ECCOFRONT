import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

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
    this.router.navigate(['main']);
  }
}
