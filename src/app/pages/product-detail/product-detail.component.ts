import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnDestroy {
  public product: {
    options: {
      name: string;
      price: number;
      descriptions: string;
      imageUrls: string[];
      quantityAvailable: number;
      _id: string;
    }[];
    _id: string;
    categoryId: string;
    productName: string;
    deleted: boolean;
    websiteID: string;
  };
  private queryParamSub;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.queryParamSub = this.activatedRoute.queryParams.subscribe(queryParams => {
      this.http.get('https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/products?optionId=' +
          queryParams.id).subscribe(
          (products: {
            result: {
              options: {
                name: string;
                price: number;
                descriptions: string;
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
          }) => {
            this.product = products.result[0];
          }
      );
    });
  }

  ngOnDestroy() {
    this.queryParamSub.unsubscribe();
  }
}
