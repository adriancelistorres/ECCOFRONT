import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulePlanningComponent } from './schedule-planning/schedule-planning.component';
import { EntelRetailRoutingModule } from './entel-retail-routing.module';



@NgModule({
  declarations: [
    SchedulePlanningComponent
  ],
  imports: [
    CommonModule,
    EntelRetailRoutingModule
  ]
})
export class EntelRetailModule { }
