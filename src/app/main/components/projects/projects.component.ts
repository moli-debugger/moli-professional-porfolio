import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  showModal = false;
  selectedImage: any;

  constructor(private modalService: NgbModal) {}

  openModal(image: any) {
    this.selectedImage = image;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  banners = [
    {
      id: 1,
      src: 'assets/image/qrcode_mobile.jpg',
      alt: 'Simple side project helps to create a QR-code for your custom data',
    },
    {
      id: 2,
      src: 'assets/image/detection-vech_mobile.jpg',
      alt: 'Simple side project helps to create a identify four wheelers in photage',
    },
    {
      id: 3,
      src: 'assets/image/facr-detection_mobile.jpg',
      alt: 'Simple side project helps to create a QR-code for your custom data',
    },
    {
      id: 4,
      src: 'assets/image/invoice_mobile.jpg',
      alt: 'Simple side project helps to create a QR-code for your custom data',
    },
    {
      id: 5,
      src: 'assets/image/web%20automation_mobile.jpg',
      alt: 'Simple side project helps to create a QR-code for your custom data',
    },
    {
      id: 6,
      src: 'assets/image/txt_mobile.jpg',
      alt: 'Simple side project helps to create a QR-code for your custom data',
    },
  ];
}
