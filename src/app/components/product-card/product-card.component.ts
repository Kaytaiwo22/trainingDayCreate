import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  inputs: ['product'],
})
export class ProductCardComponent {

  public product: {
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

  buttonLink = '/product-detail';
  constructor() { }


}
