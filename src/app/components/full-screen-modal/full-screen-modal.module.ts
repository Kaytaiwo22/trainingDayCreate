/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {FullScreenModalComponent} from "./full-screen-modal.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [FullScreenModalComponent],
  declarations: [FullScreenModalComponent],
  exports: [FullScreenModalComponent]
})
export class FullScreenModalModule{}
