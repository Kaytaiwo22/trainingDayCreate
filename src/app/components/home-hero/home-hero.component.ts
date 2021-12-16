import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class HomeHeroComponent {

  public imageUrl: string;
  public height: string;
  public width: string;

  constructor() { }

}
