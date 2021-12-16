/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ServicesHeroComponent} from './services-hero.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ServicesHeroComponent],
  declarations: [ServicesHeroComponent],
  exports: [ServicesHeroComponent]
})
export class ServicesHeroModule {


}
