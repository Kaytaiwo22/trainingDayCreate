import { UserLoginComponent } from './userLogin.component';
import { CommonModule } from '@angular/common';
import { UserLoginRoutingModule } from './userLogin-routing.module';
import { NgModule } from '@angular/core';
import { HomeHeroModule } from '../../components/home-hero/home-hero.module';
import { ImageShopModule } from '../../components/image-shop/image-shop.module';
import { ImageShopSmallModule } from '../../components/image-shop-small/image-shop-small.module';
import { SocialmediaModule } from '../../components/socialmedia/socialmedia.module';
import { FooterModule } from '../../components/footer/footer.module';
import { ProductCardModule } from '../../components/product-card/product-card.module';
import { SubHeaderModule } from '../../components/sub-header/sub-header.module';
import { AccountModule } from '../../components/account/account.module';
import { RegisterFormModule } from '../../components/register-form/register-form.module';
import { LoginFormModule } from '../../components/login-form/login-form.module';
import {HeaderModule} from "../../components/header/header.module";

@NgModule({
  declarations: [UserLoginComponent],
    imports: [CommonModule, UserLoginRoutingModule, HomeHeroModule, ImageShopModule, ImageShopSmallModule, SocialmediaModule, FooterModule, ProductCardModule, SubHeaderModule, AccountModule, RegisterFormModule, LoginFormModule, HeaderModule],
})
export class UserLoginModule {}
