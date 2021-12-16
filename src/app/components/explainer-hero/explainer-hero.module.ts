/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ExplainerHeroComponent} from "./explainer-hero.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ExplainerHeroComponent],
  declarations: [ExplainerHeroComponent],
  exports: [ExplainerHeroComponent]
})
export class ExplainerHeroModule {}
