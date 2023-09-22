import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.css'],
})
export class PopularProductComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      if (response && response.products) {
        this.products = response.products;
      }
    });
  }
}
