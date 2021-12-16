/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {MultiSelectComponent} from "./multi-select.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [MultiSelectComponent],
  declarations: [MultiSelectComponent],
  exports: [MultiSelectComponent]
})
export class MultiSelectModule {}
