/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { FullWidthImageComponent} from "./full-width-image.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [FullWidthImageComponent],
  declarations: [FullWidthImageComponent],
  exports: [FullWidthImageComponent]
})
export class FullWidthImageModule {}
