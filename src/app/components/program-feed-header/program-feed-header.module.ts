/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProgramFeedHeaderComponent} from "./program-feed-header.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ProgramFeedHeaderComponent],
  declarations: [ProgramFeedHeaderComponent],
  exports: [ProgramFeedHeaderComponent]
})
export class ProgramFeedHeaderModule {}
