import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public modalClosed() {
    this.modalClose.emit();
  }
}
