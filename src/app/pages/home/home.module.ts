import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import { SweetsHeaderModule } from "src/app/components/sweets-header/sweets-header.module";

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
  imports: [CommonModule, RouterModule, ConfirmationRoutingModule, SweetsHeaderModule],
  declarations: [HomeComponent],
  providers: []
})
export class ConfirmationModule {}
