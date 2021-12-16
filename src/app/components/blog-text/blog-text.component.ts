import { Component } from '@angular/core';

enum TextType {
  'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li'
}

@Component({
  selector: 'app-blog-text',
  templateUrl: './blog-text.component.html',
  styleUrls: ['./blog-text.component.css'],
  inputs: ['paragraphs'],

})
export class BlogTextComponent {

  public paragraphs: {
    text?: any;
    type: TextType;
  }[];

  constructor() { }

}
