/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ShopByImageComponent} from "./shop-by-image.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ShopByImageComponent],
  declarations: [ShopByImageComponent],
  exports: [ShopByImageComponent]
})
export class ShopByImageModule {}
