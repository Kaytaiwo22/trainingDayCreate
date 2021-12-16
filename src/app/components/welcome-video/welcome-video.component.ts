import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-welcome-video',
  templateUrl: './welcome-video.component.html',
  styleUrls: ['./welcome-video.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class WelcomeVideoComponent {

  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public modalClosed() {
    this.modalClose.emit();
    return false;
    console.log('HIDE INTRO');
  }
}
