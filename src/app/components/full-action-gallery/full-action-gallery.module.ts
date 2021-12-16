/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {FullActionGalleryComponent} from "./full-action-gallery.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [FullActionGalleryComponent],
  declarations: [FullActionGalleryComponent],
  exports: [FullActionGalleryComponent]
})
export class FullActionGalleryModule {}
