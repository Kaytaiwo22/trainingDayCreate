import { Component, Inject } from '@angular/core';
import { AosToken } from '../../components/animate-on-scroll/aos';
import { TaggingService } from '../../containers/main/tagging.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

declare var Stripe: any;

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    public shippingOptions: {
        id: string;
        name: string;
        description: string;
        price: number;
        currency: string;
        freeCondition: {
            priceGreaterThan: number;
        },
        productLimit: {
            quantityLessThan: number;
        },
        shippingAllowedToCountries: string[];
    }[];

  public basket: {
      _id: string;
      shippingCost: number;
      shippingId: string;
      totalProductCost: number;
      websiteID: string;
      couponCode?: string;
      products: {
          productId: string;
          optionId: string;
          quantity: number;
          productDetails: {
              description: string;
              imageUrls: string[];
              mainProductName: string;
              name: string;
              price: number;
              quantityAvailable: string;
              _id: string;
          };
      }[]
  };

  public couponCode: string;
  public couponDiscount?: number;
  public discountType?: string;
  public couponError?: string;
  public empty?: boolean;

  constructor(
    private taggingService: TaggingService,
    @Inject(AosToken) aos,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.taggingService.setAllTags(
        'James The Sleep Coach',
        'Checkout James The Sleep Coach'
    );
    aos.init();

    if (this.cookieService.get('BASKET_ID')) {
        this.setupCart();
    } else {
        this.empty = true;
    }
  }

  setupCart() {
      this.empty = false;
      this.http
          .get(
              'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
              this.cookieService.get('BASKET_ID') +
              '?includeProductDetails=true'
          )
          .subscribe(
              (basket: {
                  status: boolean;
                  code: number;
                  result: {
                      _id: string;
                      shippingCost: number;
                      shippingOptions: {
                          id: string;
                          name: string;
                          description: string;
                          price: number;
                          currency: string;
                          freeCondition: {
                              priceGreaterThan: number;
                          },
                          productLimit: {
                              quantityLessThan: number;
                          },
                          shippingAllowedToCountries: string[];
                      }[];
                      shippingId: string;
                      totalProductCost: number;
                      websiteID: string;
                      couponCode?: string;
                      products: {
                          productId: string;
                          optionId: string;
                          quantity: number;
                          productDetails: {
                              description: string;
                              imageUrls: string[];
                              mainProductName: string;
                              name: string;
                              price: number;
                              quantityAvailable: string;
                              _id: string;
                          };
                      }[]
                  };
              }) => {
                  this.basket = basket.result;
                  this.couponCode = basket.result.couponCode;
                  this.shippingOptions = basket.result.shippingOptions;
              }, () => {
                  this.cookieService.delete('BASKET_ID');
                  this.empty = true;
              }
          );
  }

  registerNow(){
      this.router.navigate(["/register"])
  }

  checkout() {
    this.http.get('https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48').subscribe((websiteData: {
        result: {
            stripePublic: string;
        }
    }) => {
        this.http.post('https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
            this.cookieService.get('BASKET_ID') + '/purchase', {}).subscribe((basketToPurchase: {
            result: string;
        }) => {
            Stripe(websiteData.result.stripePublic).redirectToCheckout({
                // Make the id field from the Checkout Session creation API response
                // available to this file, so you can provide it as argument here
                // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
                sessionId: basketToPurchase.result
            }).then(function (result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
            });
            this.router.navigate(["/account"]);
        });
    });

  }

  updateProductQuantity(details: { quantity: number; productArrayNumber: number }) {
      let basketBody;
      this.http
        .get(
          'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
            this.cookieService.get('BASKET_ID')
        )
        .subscribe(
          (basket: {
            status: boolean;
            code: number;
            result: {
                _id: string;
                shippingId: string;
                websiteID: string;
                couponCode?: string;
                products: {
                    productId: string;
                    optionId: string;
                    quantity: number;
                }[]
            };
          }) => {
            // The front end has the products that are in the DB in the following variable now
            basketBody = basket.result.products;

            if (details.quantity === 0) {
                basketBody.splice(details.productArrayNumber, 1);
            } else {
                basketBody[details.productArrayNumber].quantity = details.quantity;
            }

            this.http
              .put(
                'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
                  this.cookieService.get('BASKET_ID'),
                {
                    products: basketBody,
                    couponCode: basket.result.couponCode
                }
              )
              .subscribe(() => {
                this.setupCart();
              });
          }
        );
  }

  updateShipping(newShippingId) {
      let basketBody;
      this.http
          .get(
              'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
              this.cookieService.get('BASKET_ID')
          )
          .subscribe(
              (basket: {
                  status: boolean;
                  code: number;
                  result: {
                      _id: string;
                      shippingId: string;
                      websiteID: string;
                      couponCode?: string;
                      products: {
                          productId: string;
                          optionId: string;
                          quantity: number;
                      }[]
                  };
              }) => {
                  // The front end has the products that are in the DB in the following variable now
                  basketBody = basket.result.products;
                  this.couponCode = basket.result.couponCode;

                  this.http
                      .put(
                          'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
                          this.cookieService.get('BASKET_ID'),
                          {
                              products: basketBody,
                              shippingId: newShippingId,
                              couponCode: basket.result.couponCode
                          }
                      )
                      .subscribe(() => {
                          this.setupCart();
                      });
              }
          );
  }

  applyCoupon() {
      const self = this;
      self.couponError = '';
      this.http
          .get(
              'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/coupons/' +
              self.couponCode
          )
          .subscribe(
              (coupon: {
                  status: boolean;
                  code: number;
                  result: {
                      _id: string;
                      couponCode: string;
                      websiteID: string;
                      active: boolean;
                      sagesLimitedTo?: number;
                      amount: number;
                      discountType: string;
                  };
              }) => {
                  if (coupon.result.active) {
                      let basketBody;
                      this.http
                          .get(
                              'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
                              this.cookieService.get('BASKET_ID')
                          )
                          .subscribe(
                              (basket: {
                                  status: boolean;
                                  code: number;
                                  result: {
                                      _id: string;
                                      shippingId: string;
                                      websiteID: string;
                                      couponCode?: string;
                                      products: {
                                          productId: string;
                                          optionId: string;
                                          quantity: number;
                                      }[]
                                  };
                              }) => {

                                  // The front end has the products that are in the DB in the following variable now
                                  basketBody = basket.result.products;

                                  this.http
                                      .put(
                                          'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/baskets/' +
                                          this.cookieService.get('BASKET_ID'),
                                          {
                                              products: basketBody,
                                              couponCode: self.couponCode
                                          }
                                      )
                                      .subscribe(() => {
                                          this.setupCart();
                                      });
                              }
                          );
                  } else {
                      self.couponError = 'Sorry, this coupon is no longer valid.';
                  }
              }, () => {
                  self.couponError = 'Coupon not recognised.';
              });
  }
}
