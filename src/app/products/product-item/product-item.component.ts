import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;

  constructor(private router: Router, private productService: ProductService) {}

  onProductClick = () => {
    //this.productService.testData.next('Product item test');
    this.productService.productData = this.product;
    this.productService.product.next(this.product);
    this.router.navigate(['products', this.product?.title]);
  };
}
