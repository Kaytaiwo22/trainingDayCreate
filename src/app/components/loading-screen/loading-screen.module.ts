/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {LoadingScreenComponent} from './loading-screen.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [LoadingScreenComponent],
  declarations: [LoadingScreenComponent],
  exports: [LoadingScreenComponent]
})
export class LoadingScreenModule {}
