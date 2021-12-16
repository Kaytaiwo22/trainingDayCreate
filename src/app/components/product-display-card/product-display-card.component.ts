import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-display-card',
  templateUrl: './product-display-card.component.html',
  styleUrls: ['./product-display-card.component.css'],
  inputs: ['product'],
})
export class ProductDisplayCardComponent {

  @Input() product: {
      _id: string;
      productName: string;
      name: string;
      price: number;
      currency: string;
      imageUrls: string[];
      description: string;
      categoryName: string[];
      quantityAvailable: 2
      calltoAction: string;
    };

  @Input() hideViewProduct?: boolean;

  buttonLink = '/product-detail';
  constructor() { }


}
