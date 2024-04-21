import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, ProjectsComponent, ProjectDescriptionComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
