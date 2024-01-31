import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginOneComponent } from './auth-layout/login-one/login-one.component';
import { LoginTwoComponent } from './auth-layout/login-two/login-two.component';
import { LoginThreeComponent } from './auth-layout/login-three/login-three.component';



@NgModule({
  declarations: [AuthLayoutComponent, LoginOneComponent, LoginTwoComponent, LoginThreeComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
