/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { StepsComponent } from "./steps.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "../modal/modal.module";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule],
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent],
})
export class StepsModule {}
