import { NgModule } from '@angular/core'; 
import { ProductItemComponent } from '../products/product-item/product-item.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularProductComponent } from './popular-product/popular-product.component'; 
import { ProductRatingComponent } from './product-rating/product-rating.component'; 
import { SharedModule } from '../shared/shared.module';
import { MaterialComponentsModule } from '../shared/material-components.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  // {
  //   path: 'products',
  //   component: ProductListComponent,
  //   children: [
  //     {
  //       path: ':product-name',
  //       component: ProductDetailComponent,
  //     },
  //   ],
  // },
  { path: 'products/:name', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductDetailComponent,
    ProductListComponent,
    CarouselComponent,
    CategoryComponent,
    PopularProductComponent,
    ProductRatingComponent,
  ],
  imports: [
     
    RouterModule.forChild(routes),
    NgbCarouselModule,
    HttpClientModule,
    SharedModule,
    MaterialComponentsModule
  ],
  exports: [RouterModule],
})
export class ProductsModule {}
