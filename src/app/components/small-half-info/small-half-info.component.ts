import { Component } from '@angular/core';

@Component({
  selector: 'app-small-half-info',
  templateUrl: './small-half-info.component.html',
  styleUrls: ['./small-half-info.component.css'],
  inputs: ['header', 'imageHeader', 'paragraph', 'smallHeader',
      'paragraph2', 'imageUrl', 'backgroundPosition', 'buttonText',
      'buttonLink', 'imageRight', 'skewValue'],
})
export class SmallHalfInfoComponent {

  public header: string;
  public imageHeader: string;
  public paragraph: string;
  public smallHeader: string;
  public paragraph2: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public buttonText: string;
  public buttonLink: string;
  public imageRight: boolean;
  public skewValue?: number;

  constructor() { }

}
