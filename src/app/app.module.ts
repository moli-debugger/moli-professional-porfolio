import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { RouterActiveLinkDirective } from './router-active-link.directive';

@NgModule({
  declarations: [AppComponent, HeroCardComponent, AboutMeComponent, MyServiceComponent, RouterActiveLinkDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
