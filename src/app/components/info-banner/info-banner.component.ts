import { Component } from '@angular/core';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class InfoBannerComponent {

  public imageUrl: string;
  public height: string;
  public width: string;

  constructor() { }

}
