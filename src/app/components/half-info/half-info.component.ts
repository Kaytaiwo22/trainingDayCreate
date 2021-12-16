import { Component } from '@angular/core';

@Component({
  selector: 'app-half-info',
  templateUrl: './half-info.component.html',
  styleUrls: ['./half-info.component.css'],
  inputs: ['header', 'imageHeader', 'paragraph', 'imageUrl', 'backgroundPosition',
      'buttonText', 'buttonLink', 'imageRight', 'hideBranding', 'halfSize'],
})
export class HalfInfoComponent {

  public header: string;
  public imageHeader: string;
  public paragraph: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public buttonText: string;
  public buttonLink: string;
  public imageRight?: boolean;
  public halfSize?: boolean;
  public hideBranding?: boolean;

  constructor() { }

}
