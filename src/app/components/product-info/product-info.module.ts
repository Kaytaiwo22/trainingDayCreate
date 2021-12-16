/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { ProductInfoComponent } from './product-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ImageShopModule} from '../image-shop/image-shop.module';
import {ShopByImageModule} from '../shop-by-image/shop-by-image.module';
import {ShopBySuggestionsModule} from '../shop-by-suggestions/shop-by-suggestions.module';

@NgModule({
    imports: [CommonModule, RouterModule, ImageShopModule, ShopByImageModule, ShopBySuggestionsModule],
  entryComponents: [ProductInfoComponent],
  declarations: [ProductInfoComponent],
  providers: [CookieService],
  exports: [ProductInfoComponent],
})
export class ProductInfoModule {}
