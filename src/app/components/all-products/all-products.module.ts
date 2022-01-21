/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AllProductsComponent } from "./all-products.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [AllProductsComponent],
  declarations: [AllProductsComponent],
  exports: [AllProductsComponent],
})
export class AllProductsModule {}
