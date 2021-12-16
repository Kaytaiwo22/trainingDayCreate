import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class SocialmediaComponent {

  public imageUrl: string;
  public height: string;
  public width: string;

  constructor() { }

}
