import { Component } from '@angular/core';

enum TextType {
  'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li'
}

@Component({
  selector: 'app-animation-screen',
  templateUrl: './animation-screen.component.html',
  styleUrls: ['./animation-screen.component.css'],
  inputs: ['paragraphs'],

})
export class AnimationScreenComponent {

  public paragraphs: {
    text?: any;
    type: TextType;
  }[];

  constructor() { }

}
