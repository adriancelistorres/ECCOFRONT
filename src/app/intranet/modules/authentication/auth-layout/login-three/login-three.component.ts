import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-three',
  templateUrl: './login-three.component.html',
  styleUrl: './login-three.component.css'
})
export class LoginThreeComponent {
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
    this.router.navigate(['main']);
  }
}
