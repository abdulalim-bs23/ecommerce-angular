import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

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
  constructor(private sharedService: SharedService) {}

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
