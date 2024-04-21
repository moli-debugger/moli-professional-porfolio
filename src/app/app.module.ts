import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { RouterActiveLinkDirective } from './router-active-link.directive';

@NgModule({
  declarations: [AppComponent, RouterActiveLinkDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
