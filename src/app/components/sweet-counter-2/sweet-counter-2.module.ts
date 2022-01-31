/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { SweetCounter2Component } from "./sweet-counter-2.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SweetCounter2Component],
  declarations: [SweetCounter2Component],
  exports: [SweetCounter2Component],
})
export class SweetCounter2Module {}
