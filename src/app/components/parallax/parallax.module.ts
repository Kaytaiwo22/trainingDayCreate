/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import { ParallaxComponent} from "./parallax.component";
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [ParallaxComponent],
  declarations: [ParallaxComponent],
  exports: [ParallaxComponent]
})
export class ParallaxModule {}
