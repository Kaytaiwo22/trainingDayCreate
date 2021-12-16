/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HalfInfoComponent} from "./half-info.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [HalfInfoComponent],
  declarations: [HalfInfoComponent],
  exports: [HalfInfoComponent]
})
export class HalfInfoModule {}
