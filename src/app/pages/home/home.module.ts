import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HeroModule} from "../../components/hero/hero.module";

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
    imports: [CommonModule, RouterModule, ConfirmationRoutingModule, HeroModule],
  declarations: [HomeComponent],
  providers: []
})
export class ConfirmationModule {}
