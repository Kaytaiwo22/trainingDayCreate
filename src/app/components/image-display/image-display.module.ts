/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ImageDisplayComponent} from "./image-display.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ImageDisplayComponent],
  declarations: [ImageDisplayComponent],
  exports: [ImageDisplayComponent]
})
export class ImageDisplayModule {}
