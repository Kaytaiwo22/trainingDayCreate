import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsModule } from "src/app/components/all-products/all-products.module";
import { ProductModalModule } from "src/app/components/product-modal/product-modal.module";
import { ViewProductsComponent } from "./view-products.component";
import { ViewItemsModule } from "src/app/components/view-items/view-items.module";

const routes: Routes = [
  {
    path: "",
    component: ViewProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductsRoutingModule {}

/**
 * The Module
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ViewProductsRoutingModule,
    AllProductsModule,
    ProductModalModule,
    ViewItemsModule,
  ],
  declarations: [ViewProductsComponent],
  providers: [],
})
export class ViewProductsModule {}
