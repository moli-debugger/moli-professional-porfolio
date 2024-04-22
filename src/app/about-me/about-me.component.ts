import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('borderBack') borderBack!: ElementRef;
  @ViewChild('borderFront') borderFront!: ElementRef;
  isHovered: boolean = false;
  currentImageUrlIndex = 0;
  imageUrls = [
    '../../assets/image/About/1.jpg',
    '../../assets/image/About/2.jpg',
    '../../assets/image/About/3.jpg',
    '../../assets/image/About/4.png',
  ];

  constructor(private renderer: Renderer2) {}
  toggleSpin() {
    // this.isHovered = !this.isHovered;
    this.isHovered = false;
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.rotateImage();
    }, 5000); // Rotate every 5 seconds (adjust as needed)
  }

  rotateImage() {
    this.currentImageUrlIndex =
      (this.currentImageUrlIndex + 1) % this.imageUrls.length;
  }
}
