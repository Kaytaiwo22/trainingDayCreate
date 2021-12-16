import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explainer-hero',
  templateUrl: './explainer-hero.component.html',
  styleUrls: ['./explainer-hero.css'],
  inputs: ['header', 'footer', 'imageUrl', 'backgroundPosition', 'textColor', 'skewValue', 'buttonText', 'buttonLink', 'hideArrow', 'hideMargin'],
})
export class ExplainerHeroComponent implements OnInit {

  public header: string;
  public footer: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public textColor: string;
  public buttonText?: string;
  public buttonLink?: string;
  public skewValue: number;
  public hideArrow?: boolean;
  public hideMargin?: boolean;

  constructor() { }

  ngOnInit() {
  }

  openLiveChat() {
    window.LC_API.open_chat_window();
  }
}
