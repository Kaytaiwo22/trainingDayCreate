/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormInputsComponent } from "./form-inputs.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  entryComponents: [FormInputsComponent],
  declarations: [FormInputsComponent],
  exports: [FormInputsComponent],
})
export class FormInputsModule {}
