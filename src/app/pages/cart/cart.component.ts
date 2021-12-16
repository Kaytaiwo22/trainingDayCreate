import { Component, Inject } from '@angular/core';
import { AosToken } from '../../components/animate-on-scroll/aos';
import { TaggingService } from '../../containers/main/tagging.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

declare var Stripe: any;

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public products: {
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

  public totalPrice: number;
  public shippingCost: number;
  public premiumDeliverySelected: boolean;
  public isCollection: boolean;
  public couponCode: string;
  public couponDiscount?: number;
  public discountType?: string;
  public couponError?: string;

  constructor(
    private taggingService: TaggingService,
    @Inject(AosToken) aos,
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.taggingService.setAllTags(
        'Magical Treats',
        'Checkout with Magical Treats to buy your yummy cakes, cookies, sweets and hampers.'
    );
    aos.init();

    this.setupCart();
  }

  setupCart() {
      this.products = [];
      this.http
          .get(
              'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
              this.cookieService.get('BASKET_ID') +
              '?includeProductDetails=true'
          )
          .subscribe(
              (basket: {
                  status: boolean;
                  code: number;
                  result: {
                      premiumDeliverySelected: boolean;
                      isCollection: boolean;
                      couponCode: string;
                      products: {
                          productId: string;
                          optionId: string;
                          quantity: number;
                          productDetails: {
                              _id: string;
                              name: string;
                              price: number;
                              currency: string;
                              imageUrls: string[];
                              description: string;
                              quantityAvailable: number;
                              productName: string;
                              productId: string;
                              quantityInBasket?: number;
                          };
                      }[];
                  };
              }) => {
                  this.totalPrice = 0;
                  basket.result.products.forEach((product) => {
                      product.productDetails.quantityInBasket = product.quantity;
                      product.productDetails.productId = product.productId;
                      this.products.push(product.productDetails);
                      this.totalPrice = this.totalPrice + (product.productDetails.price * product.productDetails.quantityInBasket);
                  });

                  this.couponCode = basket.result.couponCode;

                  if (this.couponCode) {
                      this.http
                          .get(
                              'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/coupons/' +
                              this.couponCode
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
                                      this.couponDiscount = coupon.result.amount;
                                      this.discountType = coupon.result.discountType;

                                      if (this.discountType === 'percentage') {
                                          this.totalPrice = this.totalPrice * ((100 - this.couponDiscount) / 100);
                                      }
                                  }

                                  this.shippingCost = 0;
                                  this.premiumDeliverySelected = basket.result.premiumDeliverySelected;
                                  this.isCollection = basket.result.isCollection;
                                  if (basket.result.premiumDeliverySelected) {
                                      this.shippingCost = 8.39;
                                  } else if (this.totalPrice < 25 && !this.isCollection) {
                                      this.shippingCost = 2.99;
                                  } else if (this.isCollection) {
                                      this.shippingCost = 0;
                                  }

                                  if (this.discountType === 'deliveryDiscount') {
                                      this.shippingCost = this.shippingCost - this.couponDiscount;

                                      if (this.shippingCost < 0) {
                                          this.shippingCost = 0;
                                      }
                                  }
                              }, () => {
                                  this.couponError = 'Coupon not valid.';

                                  this.shippingCost = 0;
                                  this.premiumDeliverySelected = basket.result.premiumDeliverySelected;
                                  this.isCollection = basket.result.isCollection;
                                  if (basket.result.premiumDeliverySelected) {
                                      this.shippingCost = 8.39;
                                  } else if (this.totalPrice < 25 && !this.isCollection) {
                                      this.shippingCost = 2.99;
                                  } else if (this.isCollection) {
                                      this.shippingCost = 0;
                                  }
                              });
                  } else {
                      this.shippingCost = 0;
                      this.premiumDeliverySelected = basket.result.premiumDeliverySelected;
                      this.isCollection = basket.result.isCollection;
                      if (basket.result.premiumDeliverySelected) {
                          this.shippingCost = 8.39;
                      } else if (this.totalPrice < 25 && !this.isCollection) {
                          this.shippingCost = 2.99;
                      } else if (this.isCollection) {
                          this.shippingCost = 0;
                      }
                  }
              }
          );
  }

  checkout() {
    this.http.get('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd').subscribe((websiteData: {
        result: {
            stripePublic: string;
        }
    }) => {
        this.http.post('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
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
        });
    });
  }

  updateProductQuantity(details: { quantity: number; productArrayNumber: number }) {
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
              premiumDeliverySelected: boolean;
              isCollection: boolean;
              couponCode?: string;
              products: {
                productId: string;
                optionId: string;
                quantity: number;
              }[];
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
                'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
                  this.cookieService.get('BASKET_ID'),
                {
                    products: basketBody,
                    premiumDeliverySelected: basket.result.premiumDeliverySelected,
                    isCollection: basket.result.isCollection,
                    couponCode: basket.result.couponCode
                }
              )
              .subscribe(() => {
                this.setupCart();
              });
          }
        );
  }

  updateShipping(type) {
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
                      premiumDeliverySelected: boolean;
                      isCollection: boolean;
                      couponCode?: string;
                      products: {
                          productId: string;
                          optionId: string;
                          quantity: number;
                      }[];
                  };
              }) => {
                  let premiumDeliverySelected = false;
                  let isCollection = false;

                  // The front end has the products that are in the DB in the following variable now
                  basketBody = basket.result.products;

                  if (type === 'premium') {
                      premiumDeliverySelected = true;
                  } else if (type === 'collection') {
                      isCollection = true;
                  }

                  this.http
                      .put(
                          'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
                          this.cookieService.get('BASKET_ID'),
                          {
                              products: basketBody,
                              premiumDeliverySelected,
                              couponCode: basket.result.couponCode,
                              isCollection
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
              'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/coupons/' +
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
                              'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
                              this.cookieService.get('BASKET_ID')
                          )
                          .subscribe(
                              (basket: {
                                  status: boolean;
                                  code: number;
                                  result: {
                                      couponCode?: string;
                                      premiumDeliverySelected: boolean;
                                      isCollection: boolean;
                                      products: {
                                          productId: string;
                                          optionId: string;
                                          quantity: number;
                                      }[];
                                  };
                              }) => {

                                  // The front end has the products that are in the DB in the following variable now
                                  basketBody = basket.result.products;

                                  this.http
                                      .put(
                                          'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/baskets/' +
                                          this.cookieService.get('BASKET_ID'),
                                          {
                                              products: basketBody,
                                              premiumDeliverySelected: basket.result.premiumDeliverySelected,
                                              isCollection: basket.result.isCollection,
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
