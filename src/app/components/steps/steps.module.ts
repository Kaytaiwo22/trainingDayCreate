/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { StepsComponent } from "./steps.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "../modal/modal.module";
<<<<<<< HEAD
import { SweetsPickerModule } from "../sweets-picker/sweets-picker.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule,
    SweetsPickerModule,
  ],
=======
import {SweetsPickerModule} from "../sweets-picker/sweets-picker.module";

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule, SweetsPickerModule],
>>>>>>> 9f24db5d68b015cbdb6a6f6f53fb02f644f93b01
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent],
})
export class StepsModule {}
