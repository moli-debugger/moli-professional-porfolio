import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  phrases: string[] = [
    'Fullstack developer.',
    'speaker.',
    'open source contributor.',
  ];
  period: number = 2000;
  index: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.rotateText();
    }, this.period);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private rotateText(): void {
    const textElement = document.querySelector('.txt-rotate');
    if (textElement) {
      textElement.textContent = this.phrases[this.index];
      this.index = (this.index + 1) % this.phrases.length;
    }
  }
}
