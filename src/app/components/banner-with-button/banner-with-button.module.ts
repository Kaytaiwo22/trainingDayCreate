/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {BannerWithButtonComponent} from "./banner-with-button.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [BannerWithButtonComponent],
  declarations: [BannerWithButtonComponent],
  exports: [BannerWithButtonComponent]
})
export class BannerWithButtonModule {}
