import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { TaggingService } from '../../containers/main/tagging.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
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
  };

  @Input() allProductOptions: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    imageUrls: string[];
    description: string;
    quantityAvailable: number;
    productName: string;
    productId: string;
  }[];

  imageToShow: string;
  allImages: string[];
  imageCounter: number;

  public selectedProductId: string;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private taggingService: TaggingService
  ) {}

  ngOnInit() {
    // this.taggingService.setAllTags(
    //   this.product.productName + ' - ' + this.product.name,
    //   'Browse high quality ' +
    //     this.product.productName +
    //     ' in our shop. Handmade with love in the UK, especially for you.'
    // );
    this.imageCounter = 0;
  }

  buyProduct() {
    if (this.cookieService.get('BASKET_ID')) {
      // You have a basket
      let basketBody;

      this.http
        .get(
          'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
            this.cookieService.get('BASKET_ID')
        )
        .subscribe(
          (basket: {
            status: boolean;
            code: number;
            result: {
              products: {
                productId: string;
                optionId: string;
                quantity: number;
              }[];
            };
          }) => {
            // The front end has the products that are in the DB in the following variable now
            basketBody = basket.result.products;
            // But we have to add another product, so lets push it into the existing array
            basketBody.push({
              productId: this.product.productId,
              optionId: this.product._id,
              quantity: 1,
            });

            this.http
              .put(
                'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
                  this.cookieService.get('BASKET_ID'),
                { products: basketBody }
              )
              .subscribe(() => {
                this.router.navigate(['/cart']);
                // If you want to say something on the screen, like yeah its added or redirect the user to the cart
              });
          }
        );
    } else {
      // You don't have a basket
      this.http
        .post('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets', {
          products: [
            {
              productId: this.product.productId,
              optionId: this.product._id,
              quantity: 1,
            },
          ],
        })
        .subscribe(
          (basket: {
            // this is how the response will be formatted from the backend
            status: boolean;
            code: number;
            result: {
              _id: string;
            };
          }) => {
            // If the backend has done its job then set the id into a cookie so we have it for later
            if (basket && basket.result) {
              this.cookieService.set('BASKET_ID', basket.result._id);
            }
            this.router.navigate(['/cart']);
          }
        );
    }
  }

  productChange(test) {
    this.router.navigate(['/product-detail'], { queryParams: { id: test } });
  }

  imageLeft() {
    if (this.imageCounter === 0) {
      this.imageCounter = this.product.imageUrls.length - 1;
    } else {
      this.imageCounter--;
    }
  }

  imageRight() {
    if (this.imageCounter === this.product.imageUrls.length - 1) {
      this.imageCounter = 0;
    } else {
      this.imageCounter++;
    }
  }
}
