import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncentivesComponent } from './incentives/incentives.component';
import { AwardsComponent } from './awards/awards.component';
import { GuardianGuard } from '../../core/guards/guardian.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'incentives' },
  { path: 'incentives', component: IncentivesComponent, canActivate :[GuardianGuard] },
  { path: 'awards', component: AwardsComponent, canActivate :[GuardianGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentiveRoutingModule { }
