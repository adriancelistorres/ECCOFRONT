import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneComponent } from './auth-layout/login-one/login-one.component';
import { LoginTwoComponent } from './auth-layout/login-two/login-two.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginThreeComponent } from './auth-layout/login-three/login-three.component';

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
      },
      {
        path: 'loginThree',
        component: LoginThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
