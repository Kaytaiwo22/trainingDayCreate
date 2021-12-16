/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { WizardComponent } from './wizard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullScreenModalModule } from '../full-screen-modal/full-screen-modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FullScreenModalModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  entryComponents: [WizardComponent],
  declarations: [WizardComponent],
  exports: [WizardComponent],
})
export class WizardModule {}
