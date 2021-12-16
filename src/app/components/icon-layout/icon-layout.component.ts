import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-layout',
  templateUrl: './icon-layout.component.html',
  styleUrls: ['./icon-layout.css'],
  inputs: ['header', 'items', 'skewValue', 'headerInside', 'noMargin']
})
export class IconLayoutComponent implements OnInit {

  public header?: string;
  public headerInside?: boolean;
  public noMargin?: boolean;
  public skewValue ? = 0;
  public items: {
    title: string;
    iconUrl: string;
    buttonText?: string;
    buttonLink?: string;
  }[];

  constructor() {
  }

  ngOnInit() {
  }

}
