/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { PreviewAddressComponent } from "./preview-address.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [PreviewAddressComponent],
  declarations: [PreviewAddressComponent],
  exports: [PreviewAddressComponent],
})
export class PreviewAddressModule {}
