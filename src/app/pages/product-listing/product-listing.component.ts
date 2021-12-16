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
      'James The Sleep Coach',
      'Browse high quality clothing.'
    );

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      let queryString = '';

      if (queryParams.categoryId) {
        queryString = '?categoryId=' + queryParams.categoryId;
      } else if (queryParams.searchTerm) {
        queryString = '?searchTerm=' + queryParams.searchTerm;
      }

      this.http
        .get('https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/products' + queryString)
        .subscribe(
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
            this.products = products.result;
          }
        );

      this.http
        .get('https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/categories' + queryString)
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

            if (queryParams.searchTerm) {
              this.currentCategory = {
                name: 'Your Results',
                description: '',
              };
            } else if (!this.currentCategory || !this.currentCategory.name) {
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
