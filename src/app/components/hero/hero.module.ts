/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { SweetCategoriesModule } from "../sweets-categories/sweets-categories.module";

@NgModule({
  imports: [CommonModule, RouterModule, SweetCategoriesModule],
  entryComponents: [HeroComponent],
  declarations: [HeroComponent],
  exports: [HeroComponent]
})
export class HeroModule {}
