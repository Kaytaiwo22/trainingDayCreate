import { Component } from '@angular/core';

@Component({
  selector: 'app-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: ['./info-tile.component.css'],
  inputs: ['imageHeader', 'paragraph', 'imageUrl', 'backgroundPosition', 'buttonText', 'buttonLink', 'subHeader', 'headerColor'],
})
export class InfoTileComponent {

  public imageHeader: string;
  public paragraph: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public buttonText: string;
  public buttonLink: string;
  public subHeader: string;
  public headerColor: string;

  constructor() { }

}
