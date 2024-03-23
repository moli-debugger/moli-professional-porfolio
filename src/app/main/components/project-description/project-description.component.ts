import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent {
  @Input() selectedImage: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  showModal = true;

  constructor() {}

  onClose() {
    this.showModal = false;
    this.close.emit();
  }
}
