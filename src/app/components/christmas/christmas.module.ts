/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { ChristmasComponent } from "./christmas.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ChristmasComponent],
  declarations: [ChristmasComponent],
  exports: [ChristmasComponent],
})
export class ChristmasModule {
}
