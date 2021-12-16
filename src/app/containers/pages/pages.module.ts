import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HeroModule } from "../../components/hero/hero.module";
import { HalfInfoModule } from "../../components/half-info/half-info.module";
import { SmallHalfInfoModule } from "../../components/small-half-info/small-half-info.module";
import { ContactModule } from "../../components/contact/contact.module";
import { BlogTextModule } from "../../components/blog-text/blog-text.module";
import { ParallaxModule } from "../../components/parallax/parallax.module";
import {Call2actionComponent} from '../../components/call2action/call2action.component';
import {Call2actionModule} from '../../components/call2action/call2action.module';
import {ColorBoxOffersComponent} from '../../components/color-box-offers/color-box-offers.component';
import {ColorBoxOffersModule} from '../../components/color-box-offers/color-box-offers.module';
import {BannerWithButtonModule} from '../../components/banner-with-button/banner-with-button.module';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

/**
 * The Module
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    HeroModule,
    HalfInfoModule,
    SmallHalfInfoModule,
    ParallaxModule,
    ContactModule,
    BlogTextModule,
    Call2actionModule,
    ColorBoxOffersModule,
    BannerWithButtonModule
  ],
  declarations: [PagesComponent],
  providers: [],
})
export class PagesModule {}
