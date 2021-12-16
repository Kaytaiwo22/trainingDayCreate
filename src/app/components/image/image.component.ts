import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  inputs: ['text', 'header', 'imageUrl', 'borderRadius', 'roundCorner'],
})
export class ImageComponent {

  public imageUrl: string;
  public text: string;
  public header: string;
  public borderRadius?: string;
  public roundCorner?: boolean;


  constructor() { }

}
