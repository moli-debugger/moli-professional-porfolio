import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { mainModule } from 'process';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class MainModule {}
