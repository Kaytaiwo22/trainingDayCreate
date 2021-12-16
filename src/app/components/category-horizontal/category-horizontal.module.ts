/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {CategoryHorizontalComponent} from "./category-horizontal.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule],
  entryComponents: [CategoryHorizontalComponent],
  declarations: [CategoryHorizontalComponent],
  exports: [CategoryHorizontalComponent]
})
export class CategoryHorizontalModule {}
