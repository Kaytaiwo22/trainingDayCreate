/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {SocialShareBannerComponent} from "./social-share-banner.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SocialShareBannerComponent],
  declarations: [SocialShareBannerComponent],
  exports: [SocialShareBannerComponent]
})
export class SocialShareBannerModule {}
