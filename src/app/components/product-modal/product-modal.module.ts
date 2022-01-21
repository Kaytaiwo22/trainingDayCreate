/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { NavigationModule } from "../navigation/navigation.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductModalComponent } from "./product-modal.component";

@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule],
  entryComponents: [ProductModalComponent],
  declarations: [ProductModalComponent],
  exports: [ProductModalComponent],
})
export class ProductModalModule {}
