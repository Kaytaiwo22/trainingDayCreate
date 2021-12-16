/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {InfoBannerComponent} from "./info-banner.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [InfoBannerComponent],
  declarations: [InfoBannerComponent],
  exports: [InfoBannerComponent]
})
export class InfoBannerModule {}
