import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

declare var Stripe: any;


@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent implements OnInit {
  @Input() isLogin: boolean;
  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  formSubmitted = false;
  public userDetails: {
    email: string;
    password: string;
    websiteID: string;
    roles?: string[];
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    postCode?: string;
    gender?: string;
    marketingAllowed: boolean;
    userAgreement: boolean;
  }[];
  submitButton : boolean = true;
  public email: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required, Validators.email,
      // Validators.pattern(/^.*$/),
    ]),
  });
  public firstName: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public lastName: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public gender: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine1: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine2: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine3: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public postCode: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public phoneNumber: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public marketingAllowed: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public password: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public registerForm: FormGroup;
  public error?: string;
  public redirectUrl?: string;

  //**CART**//
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
  public isLoading = true;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.registerForm = this.formBuilder.group({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      phoneNumber: this.phoneNumber,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      addressLine3: this.addressLine3,
      postCode: this.postCode,
      password: this.password,
      marketingAllowed: this.marketingAllowed,
    });

    this.redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl;
    if (this.cookieService.get('BASKET_ID')) {
      this.setupCart();
    } else {
      this.empty = true;
    }
  }

  ngOnInit() {
    // If already logged in carry on
    if (this.cookieService.get('auth')) {
      this.checkout();
    } else {
      this.isLoading = false;
    }
  }

  login() {
    this.isLogin = true;
  }
  onSubmit(event) {
    event.preventDefault();
    this.submitRegistration();
    // if (this.registerForm.valid) {
    //   this.formSubmitted = true;
    //   alert("Registration");
    //   this.submitRegistration();
    //   console.log(this.registerForm.value); // Process your form
    // } else if (this.registerForm.invalid) {
    //   this.formSubmitted = false;
    //   alert("Error");
    // }
  }
  submitRegistration() {
    this.error = null;
    this.http
      .post(
        "https://api2.createdigitalsolutions.com/clientAccounts/60dafcc14b162471912edc48/create",
        {
          email: this.email.value,
          password: this.password.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          phoneNumber: this.phoneNumber.value,
          addressLine1: this.addressLine1.value,
          addressLine2: this.addressLine2.value,
          addressLine3: this.addressLine3.value,
          postCode: this.postCode.value,
          gender: this.gender.value,
          marketingAllowed: this.marketingAllowed.value || false,
        }
      )
      .subscribe(
        (authenticatedResponse: { result: { token: string; roles: string[]; } }) => {
          this.cookieService.set(
            'auth',
            authenticatedResponse.result.token,
            5,
            '/'
          );
          if (
            this.activatedRoute.snapshot.queryParams.redirectUrl &&
            this.activatedRoute.snapshot.queryParams.redirectUrl.substring(
              0,
              1
            ) === "/"
          ) {
            // window.location.href =
            //   this.activatedRoute.snapshot.queryParams.redirectUrl;
          } else {
            // this.router.navigate(["/account"]);
            this.checkout();
          }
        },
        () => {
          if (
            this.firstName.value &&
            this.lastName.value &&
            this.email.value &&
            this.password.value
          ) {
            this.error =
              "Sorry, please check your details. Do you have an account with us already?";
          } else {
            this.error = "Please fill out all fields before continuing.";
          }
        }
      );
  }

  changeEvent(event){
    if (event.target.checked) {
      this.submitButton= false;
    }
    else {
      this.submitButton= true;
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
        // this.router.navigate(["/account"]);
      });
    });

  }

}
