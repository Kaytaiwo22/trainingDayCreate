/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./login-form.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { ModalModule } from '../modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, RouterModule, ModalModule,  FormsModule, ReactiveFormsModule],
  entryComponents: [LoginFormComponent],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule {}
