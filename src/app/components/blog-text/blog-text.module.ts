/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {BlogTextComponent} from "./blog-text.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [BlogTextComponent],
  declarations: [BlogTextComponent],
  exports: [BlogTextComponent]
})
export class BlogTextModule {}
