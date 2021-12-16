/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardModule } from '../wizard/wizard.module';
import {WelcomeVideoModule} from '../welcome-video/welcome-video.module';
import {ProgrammeFeedModule} from '../programme-feed/programme-feed.module';
import {CalendarModalModule} from "../calendar-modal/calendar-modal.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        WizardModule,
        WelcomeVideoModule,
        ProgrammeFeedModule,
        CalendarModalModule
    ],
  entryComponents: [AccountComponent],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
