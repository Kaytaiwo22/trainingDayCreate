/**
 * The Component Module
 */
import {NgModule} from '@angular/core';
import {CategoryComponent} from './category.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
  entryComponents: [CategoryComponent],
  declarations: [CategoryComponent],
  exports: [CategoryComponent]
})
export class CategoryModule {}
