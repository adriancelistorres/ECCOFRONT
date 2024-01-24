import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncentivesComponent } from './incentives/incentives.component';
import { AwardsComponent } from './awards/awards.component';
import { IncentiveRoutingModule } from './incentive-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncentivesService } from '../../services/incentives.service';


@NgModule({
  declarations: [
    IncentivesComponent,
    AwardsComponent
  ],
  imports: [
    CommonModule,
    IncentiveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    IncentivesService
  ]
})
export class IncentiveModule { }
