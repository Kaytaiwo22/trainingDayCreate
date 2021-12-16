import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-hero',
  templateUrl: './services-hero.component.html',
  styleUrls: ['./services-hero.css'],
  inputs: ['serviceTitle', 'description', 'price', 'weeks', 'imageUrl', 'backgroundPosition', 'textColor', 'skewValue', 'buttonText', 'buttonLink', 'hideArrow', 'hideMargin'],
})
export class ServicesHeroComponent {

  public serviceTitle: string;
  public description: string;
  public price: string;
  public weeks: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public textColor: string;
  public buttonText?: string;
  public buttonLink?: string;
  public skewValue: number;
  public hideArrow?: boolean;
  public hideMargin?: boolean;


  constructor() { }

}
