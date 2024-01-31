import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-layout/login/login.component';
import { LoginOneComponent } from './auth-layout/login/login-one/login-one.component';
import { LoginTwoComponent } from './auth-layout/login/login-two/login-two.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'loginOne' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'loginOne',
        component: LoginOneComponent
      },
      {
        path: 'loginTwo',
        component: LoginTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
