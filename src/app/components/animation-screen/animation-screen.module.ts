/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {AnimationScreenComponent} from "./animation-screen.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [AnimationScreenComponent],
  declarations: [AnimationScreenComponent],
  exports: [AnimationScreenComponent]
})
export class AnimationScreenModule {}
