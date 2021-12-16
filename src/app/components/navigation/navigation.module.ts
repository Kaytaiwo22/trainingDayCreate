/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [NavigationComponent],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {}
