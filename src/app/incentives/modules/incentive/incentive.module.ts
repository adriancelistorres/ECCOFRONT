import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncentivesComponent } from './incentives/incentives.component';
import { AwardsComponent } from './awards/awards.component';
import { IncentiveRoutingModule } from './incentive-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncentivesService } from '../../services/incentives.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { IncentiveTriggerService } from '../../core/triggers/incentive-trigger.service';



@NgModule({
  declarations: [
    IncentivesComponent,
    AwardsComponent
  ],
  imports: [
    CommonModule,
    IncentiveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true, // Habilita el botón de cierre
    })
  ],
  providers: [
    IncentivesService
    ,IncentiveTriggerService
    // ,ToastrService
  ]
})
export class IncentiveModule { }
