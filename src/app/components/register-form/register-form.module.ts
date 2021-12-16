/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {RegisterFormComponent} from "./register-form.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { ModalModule } from '../modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ModalModule, FormsModule, ReactiveFormsModule],
  entryComponents: [RegisterFormComponent],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent]
})
export class RegisterFormModule {}
