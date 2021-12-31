/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SweetsGridComponent } from "./sweets-grid.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SweetsGridComponent],
  declarations: [SweetsGridComponent],
  exports: [SweetsGridComponent],
})
export class SweetsGridModule {}
