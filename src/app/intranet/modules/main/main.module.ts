import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainStartComponent } from './main-layout/main-start/main-start.component';
import { FooterComponent } from './main-layout/footer/footer.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    MainStartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
