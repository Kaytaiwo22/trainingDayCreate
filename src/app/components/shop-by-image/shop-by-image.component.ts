import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-image',
  templateUrl: './shop-by-image.component.html',
  styleUrls: ['./shop-by-image.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class ShopByImageComponent {

  public imageUrl: string;
  public height: string;
  public width: string;

  constructor() { }

}
