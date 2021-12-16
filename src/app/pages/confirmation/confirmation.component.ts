import { Component } from '@angular/core';
import {TaggingService} from '../../containers/main/tagging.service';
import {CookieService} from "ngx-cookie-service";

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {

  constructor(private taggingService: TaggingService, private cookieService: CookieService) {
    this.taggingService.setAllTags('Order Confirmed', 'Your order has been confirmed.');
    this.cookieService.delete('BASKET_ID');
  }
}
