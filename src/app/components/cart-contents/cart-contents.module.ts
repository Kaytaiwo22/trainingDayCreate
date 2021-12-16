/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { CartContentsComponent } from './cart-contents.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  entryComponents: [CartContentsComponent],
  declarations: [CartContentsComponent],
  exports: [CartContentsComponent],
})
export class CartContentsModule {}
