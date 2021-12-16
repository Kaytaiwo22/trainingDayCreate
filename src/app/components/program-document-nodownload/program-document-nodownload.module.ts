/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProgramDocumentNodownloadComponent} from "./program-document-nodownload.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ProgramDocumentNodownloadComponent],
  declarations: [ProgramDocumentNodownloadComponent],
  exports: [ProgramDocumentNodownloadComponent]
})
export class ProgramDocumentNodownloadModule {}
