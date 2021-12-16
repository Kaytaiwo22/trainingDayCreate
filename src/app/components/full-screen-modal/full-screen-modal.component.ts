import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent {

  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  constructor() {}

  public modalClosed() {
    this.modalClose.emit();
  }

}
