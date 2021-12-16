/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { SweetsHeaderComponent } from "./sweets-header.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SweetsHeaderComponent],
  declarations: [SweetsHeaderComponent],
  exports: [SweetsHeaderComponent]
})
export class SweetsHeaderModule {}
