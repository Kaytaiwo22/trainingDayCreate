/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BannerComponent } from "./banner-homepage.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [BannerComponent],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
