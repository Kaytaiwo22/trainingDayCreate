/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {CatalogPreviewComponent} from "./catalog-preview.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [CatalogPreviewComponent],
  declarations: [CatalogPreviewComponent],
  exports: [CatalogPreviewComponent]
})
export class CatalogPreviewModule {}
