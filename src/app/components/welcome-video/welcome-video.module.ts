/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { WelcomeVideoComponent} from "./welcome-video.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [WelcomeVideoComponent],
  declarations: [WelcomeVideoComponent],
  exports: [WelcomeVideoComponent]
})
export class WelcomeVideoModule {}
