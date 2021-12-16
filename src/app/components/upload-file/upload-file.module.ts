/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { UploadFileComponent} from "./upload-file.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [UploadFileComponent],
  declarations: [UploadFileComponent],
  exports: [UploadFileComponent]
})
export class UploadFileModule {}
