/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule, FormsModule],
  entryComponents: [HeaderComponent],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
