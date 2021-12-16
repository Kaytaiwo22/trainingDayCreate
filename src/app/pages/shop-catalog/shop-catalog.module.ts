/**
 * The Component Module
 */
import { NgModule } from '@angular/core';
import { ShopCatalogComponent } from './shop-catalog.component';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CatalogPreviewModule} from '../../components/catalog-preview/catalog-preview.module';

const routes: Routes = [
    {
        path: '',
        component: ShopCatalogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopCatalogRoutingModule {}

@NgModule({
    imports: [CommonModule, RouterModule, ShopCatalogRoutingModule, CatalogPreviewModule],
    entryComponents: [ShopCatalogComponent],
    declarations: [ShopCatalogComponent],
    exports: [ShopCatalogComponent],
})
export class ShopCatalogModule {}
