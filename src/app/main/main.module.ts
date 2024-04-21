import { AboutMeComponent } from '../about-me/about-me.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { MainComponent } from './components/main/main.component';
import { MyServiceComponent } from '../my-service/my-service.component';
import { NgModule } from '@angular/core';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    HeroCardComponent,
    AboutMeComponent,
    MyServiceComponent,
    ProjectsComponent,
    ProjectDescriptionComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
