import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../products/product-item/product-item.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-list', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductDetailComponent,
    ProductListComponent,
    CarouselComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgbCarouselModule],
  exports: [RouterModule],
})
export class ProductsModule {}
