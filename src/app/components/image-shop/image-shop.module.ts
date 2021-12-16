/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ImageShopComponent} from "./image-shop.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ImageShopComponent],
  declarations: [ImageShopComponent],
  exports: [ImageShopComponent]
})
export class ImageShopModule {}
