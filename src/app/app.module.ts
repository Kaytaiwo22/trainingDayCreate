import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './containers/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AosToken, aos } from './components/animate-on-scroll/aos';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubHeaderModule } from './components/sub-header/sub-header.module';
import { ProductListingModule } from './pages/product-listing/product-listing.module';
import { ProductCardModule } from './components/product-card/product-card.module';
import { ProductInfoModule } from './components/product-info/product-info.module';
import { ProductDetailModule } from './pages/product-detail/product-detail.module';
import { CartModule } from './pages/cart/cart.module';
import { CartContentsModule } from './components/cart-contents/cart-contents.module';
import { CategoryModule } from './components/category/category.module';
import { CookieService } from 'ngx-cookie-service';
import {HeroModule} from './components/hero/hero.module';
import {HomeModule} from './containers/home/home.module';
import {ProductDisplayCardModule} from './components/product-display-card/product-display-card.module';
import {CategoryHorizontalModule} from './components/category-horizontal/category-horizontal.module';
declare global {
  interface Window {
    LC_API: any;
  }
}

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
    ProductDisplayCardModule,
    CartModule,
    CartContentsModule,
    CategoryModule,
      CategoryHorizontalModule,
    HomeModule,
  ],
  providers: [CookieService, { provide: AosToken, useValue: aos }],
  bootstrap: [MainComponent],
})
export class AppModule {}
