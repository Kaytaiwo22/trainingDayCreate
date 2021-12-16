/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { CartContentsComponent } from './cart-contents.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CalendarModalModule} from "../calendar-modal/calendar-modal.module";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, CalendarModalModule],
  entryComponents: [CartContentsComponent],
  declarations: [CartContentsComponent],
  exports: [CartContentsComponent],
})
export class CartContentsModule {}
