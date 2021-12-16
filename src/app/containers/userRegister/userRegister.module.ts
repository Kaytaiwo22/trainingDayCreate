import { UserRegisterComponent } from './userRegister.component';
import { CommonModule } from '@angular/common';
import { UserRegisterRoutingModule } from './userRegister-routing.module';
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

@NgModule({
  declarations: [UserRegisterComponent],
  imports: [CommonModule, UserRegisterRoutingModule, HomeHeroModule, ImageShopModule, ImageShopSmallModule, SocialmediaModule, FooterModule, ProductCardModule, SubHeaderModule, AccountModule, RegisterFormModule],
})
export class UserRegisterModule {}
