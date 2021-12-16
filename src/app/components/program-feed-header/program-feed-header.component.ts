import { Component } from '@angular/core';

@Component({
  selector: 'app-program-feed-header',
  templateUrl: './program-feed-header.component.html',
  styleUrls: ['./program-feed-header.component.css'],
  inputs: ['header'],
})
export class ProgramFeedHeaderComponent {

  public header: string;

  constructor() { }

}
