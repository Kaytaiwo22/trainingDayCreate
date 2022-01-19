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
import { ContactFormModule } from "../contact-form/contact-form.module";
import { FormInputsModule } from "../form-inputs/form-inputs.module";
import { PaymentModule } from "../payment/payment.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule,
    SweetsPickerModule,
    ContactFormModule,
    FormInputsModule,
    PaymentModule,
  ],
  entryComponents: [StepsComponent],
  declarations: [StepsComponent],
  exports: [StepsComponent],
})
export class StepsModule {}
