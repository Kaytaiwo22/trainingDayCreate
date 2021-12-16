import { Component } from '@angular/core';

@Component({
  selector: 'app-text-blob',
  templateUrl: './text-blob.component.html',
  styleUrls: ['./text-blob.component.css'],
  inputs: ['paragraph', 'header', 'imageUrl', 'firstPara', 'secondPara', 'thirdPara', 'isImageBelow', 'backgroundPosition'],

})
export class TextBlobComponent {
  public imageUrl: string;
  public header: string;
  public firstPara: string;
  public secondPara: string;
  public thirdPara: string;
  public backgroundPosition: string;
  public imageRight?: boolean;
  public imageSquare?: boolean;



  constructor() { }

}
