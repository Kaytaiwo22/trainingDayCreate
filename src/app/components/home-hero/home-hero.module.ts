/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {HomeHeroComponent} from "./home-hero.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [HomeHeroComponent],
  declarations: [HomeHeroComponent],
  exports: [HomeHeroComponent]
})
export class HomeHeroModule {}
