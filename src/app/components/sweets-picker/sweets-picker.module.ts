/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { SweetsPickerComponent } from "./sweets-picker.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {SelectSweetModule} from "../select-sweet/select-sweet.module";

@NgModule({
  imports: [CommonModule, RouterModule, SelectSweetModule],
  entryComponents: [SweetsPickerComponent],
  declarations: [SweetsPickerComponent],
  exports: [SweetsPickerComponent],
})
export class SweetsPickerModule {}
