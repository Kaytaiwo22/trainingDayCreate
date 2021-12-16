/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {ProgramVideoComponent} from "./program-video.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ProgramVideoComponent],
  declarations: [ProgramVideoComponent],
  exports: [ProgramVideoComponent]
})
export class ProgramVideoModule {}
