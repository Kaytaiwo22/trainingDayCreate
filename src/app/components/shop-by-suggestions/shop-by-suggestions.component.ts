import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shop-by-suggestions',
  templateUrl: './shop-by-suggestions.component.html',
  styleUrls: ['./shop-by-suggestions.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class ShopBySuggestionsComponent {

  public imageUrl: string;
  public height: string;
  public width: string;
  showMore: boolean;
  @Input() products: {
    options: {
      name: string;
      price: number;
      description: string;
      imageUrls: string[];
      quantityAvailable: number;
      _id: string;
    }[];
    _id: string;
    categoryId: string;
    productName: string;
    deleted: boolean;
    websiteID: string;
  }[];

  constructor() { }
}
