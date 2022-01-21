import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HeroModule } from "../../components/hero/hero.module";
import { StepsModule } from "../../components/steps/steps.module";
import { SweetsHeaderModule } from "src/app/components/sweets-header/sweets-header.module";
import { HeaderComponent } from "src/app/components/header/header.component";
import { NavbarModule } from "src/app/components/navbar/navbar.module";
import { BannerModule } from "src/app/components/banner-homepage/banner-homepage.module";
import { SweetsGridModule } from "src/app/components/sweets-grid/sweets-grid.module";
import { SweetsPickerModule } from "src/app/components/sweets-picker/sweets-picker.module";
import { InfoFormModule } from "src/app/components/info-form/info-form.module";
import { AllProductsModule } from "src/app/components/all-products/all-products.module";
import { ViewProductsModule } from "src/app/components/view-products/view-products.module";
import { ProductModalModule } from "src/app/components/product-modal/product-modal.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

/**
 * The Module
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    HeroModule,
    StepsModule,
    SweetsHeaderModule,
    NavbarModule,
    BannerModule,
    SweetsGridModule,
    SweetsPickerModule,
    InfoFormModule,
    AllProductsModule,
    ViewProductsModule,
    ProductModalModule,
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
