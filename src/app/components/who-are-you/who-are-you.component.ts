import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.css'],
  inputs: ['header', 'backgroundColor', 'textColor', 'hideSummary', 'description', 'padded', 'buttonText', 'buttonLink', 'skewValue'],
})
export class WhoAreYouComponent implements OnInit {

  public header: string;
  public description: string;
  public backgroundColor?: string;
  public textColor?: string;
  public hideSummary?: boolean;
  public padded?: boolean;
  public buttonText?: string;
  public buttonLink?: string;
  public skewValue: number;

  constructor() { }

  ngOnInit() {
  }

  // openLiveChat() {
  //   window.LC_API.open_chat_window();
  // }
}
