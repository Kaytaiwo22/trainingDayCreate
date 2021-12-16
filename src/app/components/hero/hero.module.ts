/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [HeroComponent],
  declarations: [HeroComponent],
  exports: [HeroComponent]
})
export class HeroModule {}
