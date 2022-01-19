/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormInputsComponent } from "./form-inputs.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  entryComponents: [FormInputsComponent],
  declarations: [FormInputsComponent],
  exports: [FormInputsComponent],
})
export class FormInputsModule {}
