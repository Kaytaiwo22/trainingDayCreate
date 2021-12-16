import { Component } from '@angular/core';

@Component({
  selector: 'app-full-width-image',
  templateUrl: './full-width-image.component.html',
  styleUrls: ['./full-width-image.component.css'],
  inputs: ['imageUrl'],
})
export class FullWidthImageComponent {

  public imageUrl: string;

  constructor() { }

}
