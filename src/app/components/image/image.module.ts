/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { ImageComponent} from "./image.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ImageComponent],
  declarations: [ImageComponent],
  exports: [ImageComponent]
})
export class ImageModule {}
