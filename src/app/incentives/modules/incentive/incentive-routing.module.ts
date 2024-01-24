import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncentivesComponent } from './incentives/incentives.component';
import { AwardsComponent } from './awards/awards.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'incentives' },
  { path: 'incentives', component: IncentivesComponent },
  { path: 'awards', component: AwardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentiveRoutingModule { }
