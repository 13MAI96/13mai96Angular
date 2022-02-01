import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeMobileRoutingModule } from './home-mobile-routing.module';
import { HomeMobileLayoutComponent } from './home-mobile-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeMobileLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeMobileRoutingModule
  ],
  bootstrap:[
    HomeMobileLayoutComponent
  ]
})
export class HomeMobileModule { }
