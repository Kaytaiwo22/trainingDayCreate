/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { SelectSweetComponent } from "./select-sweet.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SelectSweetComponent],
  declarations: [SelectSweetComponent],
  exports: [SelectSweetComponent],
})
export class SelectSweetModule {}
