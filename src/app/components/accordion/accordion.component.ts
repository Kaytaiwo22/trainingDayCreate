import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() accordionTitle: string;
  @Input() accordionBody: string;
 public showBody: boolean;

  constructor() { }

  toggleOpenClosed() {
    this.showBody = !this.showBody;
  }

}
