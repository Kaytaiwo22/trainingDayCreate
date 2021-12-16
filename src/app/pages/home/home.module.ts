import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HeroModule} from "../../components/hero/hero.module";
import { SweetCategoriesModule } from "src/app/components/sweets-categories/sweets-categories.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule {}


/**
 * The Module
 */
@NgModule({
    imports: [CommonModule, RouterModule, ConfirmationRoutingModule, HeroModule, SweetCategoriesModule],
  declarations: [HomeComponent],
  providers: []
})
export class ConfirmationModule {}
