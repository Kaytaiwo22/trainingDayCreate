import {Component, EventEmitter, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-contents',
  templateUrl: './cart-contents.component.html',
  styleUrls: ['./cart-contents.component.css']
})
export class CartContentsComponent {

  @Output() updateQuantity: EventEmitter<{ quantity: number; productArrayNumber: number }> = new EventEmitter();

  @Input() product: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    imageUrls: string[];
    description: string;
    quantityAvailable: number;
    productName: string;
    productId: string;
    quantityInBasket: number;
  };

  @Input() productArrayNumber: number;

  constructor() {}

  updateQuantityInternal(quantity: number) {
    this.updateQuantity.emit({
        quantity: quantity,
        productArrayNumber: this.productArrayNumber
    });
  }

  updateQuantityOnScreen(changeNumberBy: number) {
    this.product.quantityInBasket = this.product.quantityInBasket + changeNumberBy;
  }
}
