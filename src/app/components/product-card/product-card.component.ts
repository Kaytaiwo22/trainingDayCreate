import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { TaggingService } from "../../containers/main/tagging.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
  inputs: ["product"],
})
export class ProductCardComponent implements OnInit {
    public otherProducts: {
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
  public product: {
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
  };
    selectedOptionId: string;
    selectedArrayId: number;
    imageCounter: number;
    openReturns: boolean;
  buttonLink = "/product-detail";

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

        this.selectNewOption(0);
        this.http
            .get(
                'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/products?categoryId=' +
                this.product.categoryId
            )
            .subscribe(
                (products: {
                    result: {
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
                }) => {
                    this.otherProducts = [];
                    products.result.forEach((product, productIndex) => {
                        if (this.otherProducts.length < 3 && product._id !== this.product._id) {
                            this.otherProducts.push(product);
                        }
                    });
                }
            );
    }

    selectNewOption(index: number) {
        console.log("check options", index, this.product);
        this.selectedOptionId = this.product.options[index]._id;
        this.selectedArrayId = index;
    }

    buyProduct() {
    if (this.cookieService.get("BASKET_ID")) {
      // You have a basket
      let basketBody;

      this.http
        .get(
          "https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/" +
            this.cookieService.get("BASKET_ID")
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
                      productId: this.product._id,
                      optionId: this.selectedOptionId,
                      quantity: 1,
                  });

            this.http
              .put(
                "https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/" +
                  this.cookieService.get("BASKET_ID"),
                { products: basketBody }
              )
              .subscribe(() => {
                this.router.navigate(["/cart"]);
                // If you want to say something on the screen, like yeah its added or redirect the user to the cart
              });
          }
        );
    } else {
      // You don't have a basket
      this.http
        .post(
          "https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets",
          {
            products: [
              {
                productId: this.product._id,
                optionId: this.selectedOptionId,
                quantity: 1,
              },
            ],
          }
        )
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
              this.cookieService.set("BASKET_ID", basket.result._id);
            }
            this.router.navigate(["/cart"]);
          }
        );
    }
  }
}
