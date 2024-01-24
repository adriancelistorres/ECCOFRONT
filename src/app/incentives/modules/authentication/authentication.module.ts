import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth-layout/login/login.component';
import { LoginOneComponent } from './auth-layout/login/login-one/login-one.component';
import { HttpClientModule } from '@angular/common/http';
import { IncentivesService } from '../../services/incentives.service';


@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, LoginOneComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [IncentivesService]
})
export class AuthenticationModule { }
