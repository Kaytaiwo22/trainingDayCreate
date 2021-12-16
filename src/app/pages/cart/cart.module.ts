import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";
import {ExplainerHeroModule} from "../../components/explainer-hero/explainer-hero.module";
import {IconLayoutModule} from "../../components/icon-layout/icon-layout.module";
import {FullActionGalleryModule} from "../../components/full-action-gallery/full-action-gallery.module";
import {ImageClusterModule} from "../../components/image-cluster/image-cluster.module";
import {HeroModule} from "../../components/hero/hero.module";
import {HeaderModule} from "../../components/header/header.module";
import {FooterModule} from "../../components/footer/footer.module";
import {ImageDisplayModule} from "../../components/image-display/image-display.module";
import {HalfInfoModule} from '../../components/half-info/half-info.module';
import {SmallHalfInfoModule} from '../../components/small-half-info/small-half-info.module';
import {ProductCardModule} from '../../components/product-card/product-card.module';
import {ProductInfoModule} from '../../components/product-info/product-info.module';
import {CartContentsModule} from '../../components/cart-contents/cart-contents.module';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}


/**
 * The Module
 */
@NgModule({
  imports: [CommonModule, RouterModule, CartRoutingModule, ExplainerHeroModule, IconLayoutModule, FullActionGalleryModule, ImageClusterModule, HeroModule, HeaderModule, FooterModule, ImageDisplayModule, HalfInfoModule, SmallHalfInfoModule, ProductCardModule, ProductInfoModule, CartContentsModule, FormsModule],
  declarations: [CartComponent],
  providers: []
})
export class CartModule {}
