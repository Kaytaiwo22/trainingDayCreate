/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProgrammeFeedComponent} from "./programme-feed.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProgramFeedHeaderModule} from '../program-feed-header/program-feed-header.module';
import {ProgramVideoModule} from '../program-video/program-video.module';
import {ProgramDocumentDownloadComponent} from '../program-document-download/program-document-download.component';
import {ProgramDocumentNodownloadModule} from '../program-document-nodownload/program-document-nodownload.module';

@NgModule({
    imports: [CommonModule, RouterModule, ProgramFeedHeaderModule, ProgramVideoModule, ProgramDocumentNodownloadModule],
  entryComponents: [ProgrammeFeedComponent],
    declarations: [ProgrammeFeedComponent, ProgramDocumentDownloadComponent],
  exports: [ProgrammeFeedComponent]
})
export class ProgrammeFeedModule {}
