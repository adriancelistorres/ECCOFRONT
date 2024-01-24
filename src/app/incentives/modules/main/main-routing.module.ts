import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // { 
      //   path: '', 
      //   redirectTo: '/inicio/login', 
      //   pathMatch: 'full' 
      // },
      {
        path: '',
        loadChildren: () => import('./../incentive/incentive.module').then(m => m.IncentiveModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
