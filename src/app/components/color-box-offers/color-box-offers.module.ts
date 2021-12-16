/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ColorBoxOffersComponent} from "./color-box-offers.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ColorBoxOffersComponent],
  declarations: [ColorBoxOffersComponent],
  exports: [ColorBoxOffersComponent]
})
export class ColorBoxOffersModule {}
