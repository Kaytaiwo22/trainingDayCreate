/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { StepsComponent} from "./steps.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent]
})
export class StepsModule {}
