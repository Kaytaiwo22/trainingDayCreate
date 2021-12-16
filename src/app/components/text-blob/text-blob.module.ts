/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {TextBlobComponent} from "./text-blob.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [TextBlobComponent],
  declarations: [TextBlobComponent],
  exports: [TextBlobComponent]
})
export class TextBlobModule {}
