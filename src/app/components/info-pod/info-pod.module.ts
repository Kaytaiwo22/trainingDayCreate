/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {InfoPodComponent} from "./info-pod.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [InfoPodComponent],
  declarations: [InfoPodComponent],
  exports: [InfoPodComponent]
})
export class InfoPodModule {}
