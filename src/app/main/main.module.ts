import { CommonModule } from '@angular/common';
import { FlipBookModule } from '@labsforge/flipbook';
import { FlipbookComponent } from './components/flipbook/flipbook.component';
import { HorizontalTimelineComponent } from './components/events/events.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    MainComponent,
    FlipbookComponent,
    ProjectsComponent,
    ProjectDescriptionComponent,
    HorizontalTimelineComponent,
  ],
  imports: [CommonModule, FlipBookModule],
  exports: [MainComponent],
})
export class MainModule {}
