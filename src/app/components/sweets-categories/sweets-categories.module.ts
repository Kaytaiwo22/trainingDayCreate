/**
 * The Component Module
 */
 import {NgModule} from "@angular/core";
 import {SweetsCategoriesComponent} from "./sweets-categories.component";
 import { CommonModule } from '@angular/common';
 import {RouterModule} from "@angular/router";
 
 
 @NgModule({
   imports: [CommonModule, RouterModule],
   entryComponents: [SweetsCategoriesComponent],
   declarations: [SweetsCategoriesComponent],
   exports: [SweetsCategoriesComponent]
 })
 export class SweetCategoriesModule {}
 