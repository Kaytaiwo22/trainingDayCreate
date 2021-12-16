/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {IconLayoutComponent} from "./icon-layout.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [IconLayoutComponent],
  declarations: [IconLayoutComponent],
  exports: [IconLayoutComponent]
})
export class IconLayoutModule {}
