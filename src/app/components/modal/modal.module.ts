/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ModalComponent} from "./modal.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [NavigationModule, CommonModule, RouterModule],
  entryComponents: [ModalComponent],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule {}
