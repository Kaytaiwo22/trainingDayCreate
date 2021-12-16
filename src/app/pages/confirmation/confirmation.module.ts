import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ConfirmationComponent} from "./confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: ConfirmationComponent
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
  imports: [CommonModule, RouterModule, ConfirmationRoutingModule],
  declarations: [ConfirmationComponent],
  providers: []
})
export class ConfirmationModule {}
