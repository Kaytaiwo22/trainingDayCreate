/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ImageClusterComponent} from "./image-cluster.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ImageClusterComponent],
  declarations: [ImageClusterComponent],
  exports: [ImageClusterComponent]
})
export class ImageClusterModule {}
