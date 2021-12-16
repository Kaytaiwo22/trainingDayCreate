/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProgramDocumentDownloadComponent} from "./program-video.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ProgramDocumentDownloadComponent],
  declarations: [ProgramDocumentDownloadComponent],
  exports: [ProgramDocumentDownloadComponent]
})
export class ProgramDocumentDownloadModule {}
