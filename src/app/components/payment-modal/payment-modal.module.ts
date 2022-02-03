/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PaymentModalComponent } from "./payment-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  entryComponents: [PaymentModalComponent],
  declarations: [PaymentModalComponent],
  exports: [PaymentModalComponent],
})
export class PaymentModalModule {}
