/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { InformationFormComponent } from "./information-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  entryComponents: [InformationFormComponent],
  declarations: [InformationFormComponent],
  exports: [InformationFormComponent],
})
export class InformationFormModule {}
