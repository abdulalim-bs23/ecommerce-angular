import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  quantity: number = 1;
  price: number = 150;
  updatedPrice: number = 150;
  productAddToCart: number = 0;
  product: Product | undefined;

  productName: string = '';
  productTitle: string = '';

  constructor(
    private sharedService: SharedService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productService.product$.subscribe((product) => {
      this.product = product;
    });

    this.route.params.subscribe((params) => {
      this.productName = params['name'];
      // Use the productName to fetch the product details as needed
    });

    // this.productService.testData.subscribe((data) => {
    //   this.productTitle = data;
    //   console.log(this.productTitle);
    // });
    this.product = this.productService.productData;
    console.log(this.product);
  }
  addQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
      this.updatedPrice = this.price * this.quantity;
    }
  }

  removeQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updatedPrice = this.price * this.quantity;
    }
  }
  addToCart() {
    console.log(this.productAddToCart);
    this.sharedService.addToCart.next(++this.productAddToCart);
  }
}
