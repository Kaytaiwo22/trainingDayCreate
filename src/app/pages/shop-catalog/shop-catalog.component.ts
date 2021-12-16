import {Component, Input} from '@angular/core';

@Component({
  // selector: 'app-shop-catalog',
  selector: 'app-shop-catalog',
  templateUrl: './shop-catalog.component.html',
  styleUrls: ['./shop-catalog.component.css'],
})
export class ShopCatalogComponent {

  @Input() imageUrl = './assets/images/dessert.jpg';
  constructor() {}
}
