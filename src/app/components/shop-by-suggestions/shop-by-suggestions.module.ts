/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ShopBySuggestionsComponent} from "./shop-by-suggestions.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductCardModule} from '../product-card/product-card.module';


@NgModule({
    imports: [CommonModule, RouterModule, ProductCardModule],
  entryComponents: [ShopBySuggestionsComponent],
  declarations: [ShopBySuggestionsComponent],
  exports: [ShopBySuggestionsComponent]
})
export class ShopBySuggestionsModule {}
