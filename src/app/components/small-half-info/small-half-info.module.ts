/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {SmallHalfInfoComponent} from "./small-half-info.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SmallHalfInfoComponent],
  declarations: [SmallHalfInfoComponent],
  exports: [SmallHalfInfoComponent]
})
export class SmallHalfInfoModule {}
