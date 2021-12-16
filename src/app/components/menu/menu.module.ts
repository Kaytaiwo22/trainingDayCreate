/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoadingScreenModule} from '../loading-screen/loading-screen.module';
import {WelcomeVideoModule} from '../welcome-video/welcome-video.module';
import {AccordionModule} from '../accordion/accordion.module';

@NgModule({
    imports: [CommonModule, RouterModule, LoadingScreenModule, WelcomeVideoModule, AccordionModule],
  entryComponents: [MenuComponent],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
