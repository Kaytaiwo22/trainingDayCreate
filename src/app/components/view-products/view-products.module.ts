/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ViewProductsComponent } from "./view-products.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ViewProductsComponent],
  declarations: [ViewProductsComponent],
  exports: [ViewProductsComponent],
})
export class ViewProductsModule {}
