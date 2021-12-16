import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  public product: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    imageUrls: string[];
    description: string;
    quantityAvailable: number;
    productName: string;
  };
  public allProductOptions: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    imageUrls: string[];
    description: string;
    quantityAvailable: number;
    productName: string;
  }[];

  public productName: string;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.http.get('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/products').subscribe(
        (products: {
          result: {
            _id: string;
            categoryId: string;
            productName: string;
            websiteID: string;
            options: {
              _id: string;
              name: string;
              description: string;
              price: number;
              quantityAvailable: number;
              imageUrls: string[];
            }[];
          }[];
        }) => {
          products.result.forEach((product: any) => {
            product.options.forEach((productOption) => {
              if (product.options && productOption && productOption._id === queryParams.id) {
                productOption.currency = 'GBP';
                productOption.productName = product.productName;
                productOption.productId = product._id;
                this.product = productOption;
                this.allProductOptions = product.options;
              }
            });
          });
        }
      );
    });
  }
}
