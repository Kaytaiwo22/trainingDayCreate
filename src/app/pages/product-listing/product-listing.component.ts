import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TaggingService } from '../../containers/main/tagging.service';

@Component({
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent {
  public products: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    imageUrls: string[];
    description: string;
    categoryName: string;
    quantityAvailable: number;
  }[] = [];

  public currentCategory: {
    name: string;
    description: string;
  };

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private taggingService: TaggingService
  ) {
    this.taggingService.setAllTags(
      'Magical Treats',
      'Order high quality home-made treats in our shop. Handmade with love in the UK, especially for you.'
    );

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      let queryString = '';

      if (queryParams.categoryId) {
        queryString = '?categoryId=' + queryParams.categoryId;
      }

      this.http
        .get('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/products' + queryString)
        .subscribe(
          (products: {
            result: {
              _id: string;
              name: string;
              price: number;
              currency: string;
              imageUrls: string[];
              description: string;
              categoryName: string;
              quantityAvailable: number;
            }[];
          }) => {
            this.products = [];
            products.result.forEach((product: any) => {
              if (product.options && product.options[0]) {
                product.options[0].currency = 'GBP';
                product.options[0].productName = product.productName;
                this.products.push(product.options[0]);
              }
            });
          }
        );

      this.http
        .get('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/categories' + queryString)
        .subscribe(
          (categories: {
            result: {
              _id: string;
              name: string;
              description: string;
            }[];
          }) => {
            categories.result.forEach((category) => {
              if (queryParams && queryParams.categoryId && queryParams.categoryId === category._id) {
                this.currentCategory = {
                  name: category.name,
                  description: category.description,
                };
              }
            });

            if (!this.currentCategory || !this.currentCategory.name) {
              this.currentCategory = {
                name: 'All Products',
                description: '',
              };
            }
          }
        );
    });
  }
}
