/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { StepsComponent } from "./steps.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from "../modal/modal.module";
import { SweetsPickerModule } from "../sweets-picker/sweets-picker.module";
import { InfoFormModule } from "../info-form/info-form.module";
import { ContactFormModule } from "../contact-form/contact-form.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule,
    SweetsPickerModule,
    InfoFormModule,
    ContactFormModule,
  ],
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent],
})
export class StepsModule {}
