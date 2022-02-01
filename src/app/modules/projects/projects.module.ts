import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects.component';
import { ProjectsLayoutComponent } from './projects-layout.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  bootstrap:[
    ProjectsLayoutComponent
  ]
})
export class ProjectsModule { }
