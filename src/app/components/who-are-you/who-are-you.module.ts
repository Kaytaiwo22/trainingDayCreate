/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {WhoAreYouComponent} from "./who-are-you.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [WhoAreYouComponent],
  declarations: [WhoAreYouComponent],
  exports: [WhoAreYouComponent]
})
export class WhoAreYouModule {}
