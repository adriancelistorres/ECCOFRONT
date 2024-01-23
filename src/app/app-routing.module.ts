import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './intranet/shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { 
    path: '', 
    loadChildren: () => import('./intranet/modules/starts/starts.module').then(m => m.StartsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./intranet/modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./intranet/modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: '**', component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
