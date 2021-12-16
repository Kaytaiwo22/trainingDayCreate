/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {AccordionComponent} from "./accordion.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [AccordionComponent],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule {}
