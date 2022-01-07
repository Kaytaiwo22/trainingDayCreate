/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { SweetsPickerComponent } from "./sweets-picker.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SweetsPickerComponent],
  declarations: [SweetsPickerComponent],
  exports: [SweetsPickerComponent],
})
export class SweetsPickerModule {}
