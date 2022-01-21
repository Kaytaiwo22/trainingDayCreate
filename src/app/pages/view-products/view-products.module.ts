/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ViewProductsComponent } from "./view-products.component";
import { AllProductsModule } from "src/app/components/all-products/all-products.module";

@NgModule({
  imports: [CommonModule, RouterModule, AllProductsModule],
  entryComponents: [ViewProductsComponent],
  declarations: [ViewProductsComponent],
  exports: [ViewProductsComponent],
})
export class ViewProductsModule {}
