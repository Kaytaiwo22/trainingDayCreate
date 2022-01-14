/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { SweetCounterComponent } from "./sweet-counter.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SweetCounterComponent],
  declarations: [SweetCounterComponent],
  exports: [SweetCounterComponent],
})
export class SweetCounterModule {}
