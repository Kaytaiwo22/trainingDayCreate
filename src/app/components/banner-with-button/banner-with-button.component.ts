import { Component } from "@angular/core";

@Component({
  selector: 'app-banner-with-button',
  templateUrl: './banner-with-button.component.html',
  styleUrls: ['./banner-with-button.component.css'],
  inputs: ['header', 'buttonText', 'buttonUrl'],
})
export class BannerWithButtonComponent {
  public header: string;
  public buttonText: string;
  public buttonUrl: string;
  link = '/shop';

  constructor() {}
}
