/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule],
  entryComponents: [HeaderComponent],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
