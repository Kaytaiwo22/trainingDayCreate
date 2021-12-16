/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { ProductInfoComponent } from './product-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ProductDisplayCardModule} from '../product-display-card/product-display-card.module';

@NgModule({
  imports: [CommonModule, RouterModule, ProductDisplayCardModule],
  entryComponents: [ProductInfoComponent],
  declarations: [ProductInfoComponent],
  providers: [CookieService],
  exports: [ProductInfoComponent],
})
export class ProductInfoModule {}
