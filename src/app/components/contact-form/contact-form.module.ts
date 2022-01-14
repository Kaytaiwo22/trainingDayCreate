/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { ContactFormComponent } from "./contact-form.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ModalModule } from "../modal/modal.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  entryComponents: [ContactFormComponent],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
})
export class ContactFormModule {}
