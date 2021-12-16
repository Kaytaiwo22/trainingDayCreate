/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {SocialmediaComponent} from "./socialmedia.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [SocialmediaComponent],
  declarations: [SocialmediaComponent],
  exports: [SocialmediaComponent]
})
export class SocialmediaModule {}
