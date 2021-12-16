/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { StepsComponent} from "./steps.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent]
})
export class StepsModule {}
