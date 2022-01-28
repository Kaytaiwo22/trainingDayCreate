/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ViewItemsComponent } from "./view-items.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ViewItemsComponent],
  declarations: [ViewItemsComponent],
  exports: [ViewItemsComponent],
})
export class ViewItemsModule {}
