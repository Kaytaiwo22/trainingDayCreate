/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {SubHeaderComponent} from "./sub-header.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule],
  entryComponents: [SubHeaderComponent],
  declarations: [SubHeaderComponent],
  exports: [SubHeaderComponent]
})
export class SubHeaderModule {}
