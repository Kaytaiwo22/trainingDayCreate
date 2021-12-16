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
    optionId: string;
    productId: string;
    quantity: number;
    productDetails: {
      description: string;
      imageUrls: string[];
      mainProductName: string;
      name: string;
      price: number;
      quantityAvailable: number;
      _id: string;
    };
  };
  bookMeeting: boolean;
  @Input() productArrayNumber: number;

  constructor() {}

  updateQuantityInternal(quantity: number) {
    this.updateQuantity.emit({
        quantity: quantity,
        productArrayNumber: this.productArrayNumber
    });
  }

  updateQuantityOnScreen(changeNumberBy: number) {
    this.product.quantity = this.product.quantity + changeNumberBy;
  }

  meetingSelection(){
    this.bookMeeting = true;
  }
  close(){
    this.bookMeeting = false;
  }
}
