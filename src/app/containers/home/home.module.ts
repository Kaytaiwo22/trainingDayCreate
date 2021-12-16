/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeroModule} from '../../components/hero/hero.module';
import {InfoTileModule} from '../../components/info-tile/info-tile.module';
import {HomeHeroModule} from '../../components/home-hero/home-hero.module';
import {InfoBannerModule} from '../../components/info-banner/info-banner.module';
import {ImageShopModule} from '../../components/image-shop/image-shop.module';
import {ShopByImageModule} from '../../components/shop-by-image/shop-by-image.module';
import {ImageShopSmallModule} from '../../components/image-shop-small/image-shop-small.module';
import {SocialmediaModule} from '../../components/socialmedia/socialmedia.module';
import {MenuModule} from '../../components/menu/menu.module';

@NgModule({
    imports: [CommonModule, RouterModule, HeroModule, InfoTileModule, HomeHeroModule, InfoBannerModule, InfoBannerModule, ImageShopModule, ShopByImageModule, ImageShopSmallModule, SocialmediaModule, MenuModule],
  entryComponents: [HomeComponent],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
