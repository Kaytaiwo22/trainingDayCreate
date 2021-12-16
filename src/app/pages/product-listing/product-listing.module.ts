import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ProductListingComponent} from "./product-listing.component";
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
import {CategoryModule} from '../../components/category/category.module';
import {ProductDisplayCardModule} from '../../components/product-display-card/product-display-card.module';
import {CategoryHorizontalModule} from '../../components/category-horizontal/category-horizontal.module';

const routes: Routes = [
  {
    path: '',
    component: ProductListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListingRoutingModule {}


/**
 * The Module
 */
@NgModule({
    imports: [CommonModule, RouterModule, ProductListingRoutingModule, ExplainerHeroModule, IconLayoutModule, FullActionGalleryModule, ImageClusterModule, HeroModule, HeaderModule, FooterModule, ImageDisplayModule, HalfInfoModule, SmallHalfInfoModule, ProductCardModule, CategoryModule, ProductDisplayCardModule, CategoryHorizontalModule],
  declarations: [ProductListingComponent],
  providers: []
})
export class ProductListingModule {}
