/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ContactBannerComponent} from "./contact-banner.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ContactBannerComponent],
  declarations: [ContactBannerComponent],
  exports: [ContactBannerComponent]
})
export class ContactBannerModule {}
