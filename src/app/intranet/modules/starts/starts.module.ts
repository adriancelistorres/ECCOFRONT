import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartsLayoutComponent } from './starts-layout/starts-layout.component';
import { StartsRoutingModule } from './starts-routing.module';
import { StartComponent } from './starts-layout/start/start.component';

@NgModule({
  declarations: [
    StartsLayoutComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    StartsRoutingModule
  ]
})
export class StartsModule { }
