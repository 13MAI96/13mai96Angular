import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap:[
    HomeLayoutComponent
  ]
})
export class HomeModule { }
