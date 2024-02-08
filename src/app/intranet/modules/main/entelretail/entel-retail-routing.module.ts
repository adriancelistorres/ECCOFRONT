import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulePlanningComponent } from './schedule-planning/schedule-planning.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path:'scheduleplanning',
    component: SchedulePlanningComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntelRetailRoutingModule { }
