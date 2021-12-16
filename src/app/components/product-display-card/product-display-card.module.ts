/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProductDisplayCardComponent} from './product-display-card.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ProductDisplayCardComponent],
  declarations: [ProductDisplayCardComponent],
  exports: [ProductDisplayCardComponent]
})
export class ProductDisplayCardModule {}
