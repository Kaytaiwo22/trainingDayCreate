/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PaymentComponent } from "./payment.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [PaymentComponent],
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
})
export class PaymentModule {}
