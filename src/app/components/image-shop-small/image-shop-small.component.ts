import { Component } from '@angular/core';

@Component({
  selector: 'app-image-shop-small',
  templateUrl: './image-shop-small.component.html',
  styleUrls: ['./image-shop-small.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class ImageShopSmallComponent {

  public imageUrl: string;
  public height: string;
  public width: string;
  tracksuitId: '6038368afca4d10022778584';
  shirtId: '60380b70d7248b002236605a';

  constructor() { }

}
