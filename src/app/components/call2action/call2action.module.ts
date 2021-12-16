/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {Call2actionComponent} from "./call2action.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [Call2actionComponent],
  declarations: [Call2actionComponent],
  exports: [Call2actionComponent]
})
export class Call2actionModule {}
