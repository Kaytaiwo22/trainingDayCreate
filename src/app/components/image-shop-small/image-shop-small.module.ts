/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ImageShopSmallComponent} from "./image-shop-small.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ImageShopSmallComponent],
  declarations: [ImageShopSmallComponent],
  exports: [ImageShopSmallComponent]
})
export class ImageShopSmallModule {}
