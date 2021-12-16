/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeroModule} from '../../components/hero/hero.module';
import {InfoTileModule} from '../../components/info-tile/info-tile.module';

@NgModule({
  imports: [CommonModule, RouterModule, HeroModule, InfoTileModule],
  entryComponents: [AboutComponent],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
