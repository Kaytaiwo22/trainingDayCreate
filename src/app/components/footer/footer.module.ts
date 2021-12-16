/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SubHeaderModule} from '../sub-header/sub-header.module';

@NgModule({
    imports: [CommonModule, RouterModule, SubHeaderModule],
  entryComponents: [FooterComponent],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
