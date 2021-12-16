/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {InfoTileComponent} from "./info-tile.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [InfoTileComponent],
  declarations: [InfoTileComponent],
  exports: [InfoTileComponent]
})
export class InfoTileModule {}
