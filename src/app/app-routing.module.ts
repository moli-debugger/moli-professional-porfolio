import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { MainComponent } from './main/components/main/main.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './main/components/projects/projects.component';

const routes: Routes = [
  {
    path: 'index',
    component: MainComponent,
  },
  // {
  //   path: 'service',
  //   component: MyServiceComponent,
  // },
  // {
  //   path: 'projects',
  //   component: ProjectsComponent,
  // },
  // {
  //   path: 'testimonial',
  //   component: ProjectsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
