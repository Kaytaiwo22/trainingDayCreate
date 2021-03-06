/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ModalModule } from "../modal/modal.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfoFormComponent } from "./info-form.component";
import { SweetCounterModule } from "../sweet-counter/sweet-counter.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    SweetCounterModule,
  ],
  entryComponents: [InfoFormComponent],
  declarations: [InfoFormComponent],
  exports: [InfoFormComponent],
})
export class InfoFormModule {}
