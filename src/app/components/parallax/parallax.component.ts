import { Component } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class ParallaxComponent {

  public imageUrl: string;
  public height: string;
  public width: string;

  constructor() { }

}
