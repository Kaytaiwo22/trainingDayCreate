import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { MainComponent } from "./containers/main/main.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AosToken, aos } from "./components/animate-on-scroll/aos";
import { HeaderModule } from "./components/header/header.module";
import { FooterModule } from "./components/footer/footer.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SubHeaderModule } from "./components/sub-header/sub-header.module";
import { ProductListingModule } from "./pages/product-listing/product-listing.module";
import { ProductCardModule } from "./components/product-card/product-card.module";
import { ProductInfoModule } from "./components/product-info/product-info.module";
import { ProductDetailModule } from "./pages/product-detail/product-detail.module";
import { CartModule } from "./pages/cart/cart.module";
import { CartContentsModule } from "./components/cart-contents/cart-contents.module";
import { CategoryModule } from "./components/category/category.module";
import { CookieService } from "ngx-cookie-service";
import { HeroModule } from "./components/hero/hero.module";
import { ShopCatalogModule } from "./pages/shop-catalog/shop-catalog.module";
import { MenuModule } from "./components/menu/menu.module";
import { LoadingScreenModule } from "./components/loading-screen/loading-screen.module";
import { AccountModule } from "./components/account/account.module";
import { MyAccountModule } from "./containers/myAccount/myAccount.module";
import { LoginHeaderInterceptorService } from "./components/login-form/login-header-interceptor.service";
import { VerifiedAsLoggedInService } from "../verified-as-logged-in.service";
import { VerifiedAsLoggedOutService } from "../verified-as-logged-out.service";
import { UserDetailsService } from "../user-details.service";
import { NavbarModule } from "./components/navbar/navbar.module";
import { BannerModule } from "./components/banner-homepage/banner-homepage.module";
import { SweetsGridModule } from "./components/sweets-grid/sweets-grid.module";
import { StepsModule } from "./components/steps/steps.module";
import { SweetsPickerModule } from "./components/sweets-picker/sweets-picker.module";
import { InfoFormModule } from "./components/info-form/info-form.module";
import { SweetCounterModule } from "./components/sweet-counter/sweet-counter.module";
import { ContactFormModule } from "./components/contact-form/contact-form.module";
import { FormInputsModule } from "./components/form-inputs/form-inputs.module";
import { PaymentModule } from "./components/payment/payment.module";
import { AllProductsModule } from "./components/all-products/all-products.module";
import { ProductModalModule } from "./components/product-modal/product-modal.module";
import { ViewProductsModule } from "./pages/view-products/view-products.module";

declare global {
  interface Window {
    LC_API: any;
  }
}
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoginHeaderInterceptorService,
    multi: true,
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HeroModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeaderModule,
    SubHeaderModule,
    FooterModule,
    ProductListingModule,
    ProductCardModule,
    ProductInfoModule,
    ProductDetailModule,
    CartModule,
    CartContentsModule,
    CategoryModule,
    ShopCatalogModule,
    LoadingScreenModule,
    MyAccountModule,
    AccountModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    BannerModule,
    SweetsGridModule,
    StepsModule,
    SweetsPickerModule,
    InfoFormModule,
    SweetCounterModule,
    ContactFormModule,
    FormInputsModule,
    PaymentModule,
    AllProductsModule,
    ProductModalModule,
    ViewProductsModule,
  ],
  providers: [
    VerifiedAsLoggedInService,
    VerifiedAsLoggedOutService,
    UserDetailsService,
    CookieService,
    { provide: AosToken, useValue: aos },
    httpInterceptorProviders,
  ],
  bootstrap: [MainComponent],
})
export class AppModule {}
