import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then((mod) => mod.ConfirmationModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then((mod) => mod.ProductDetailModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./pages/product-listing/product-listing.module').then((mod) => mod.ProductListingModule),
  }
  ,
  {
    path: 'articles/:slug',
    loadChildren: () => import('./containers/pages/pages.module').then((mod) => mod.PagesModule),
  },
  {
    path: ':slug',
    loadChildren: () => import('./containers/pages/pages.module').then((mod) => mod.PagesModule),
  },
  {
    path: '',
    loadChildren: () => import('./containers/pages/pages.module').then((mod) => mod.PagesModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
