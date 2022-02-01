import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me.component';
import { AboutMeLayoutComponent } from './about-me-layout.component';
import { AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ],
  bootstrap:[
    AboutMeLayoutComponent
  ]
})
export class AboutMeModule { }
