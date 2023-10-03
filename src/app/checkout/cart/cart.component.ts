import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  productCarts: any[] = [];
  constructor() {
    this.productCarts = [
      {
        name: 'Laptop',
        imageUrl: 'https://i.dummyjson.com/data/products/7/2.jpg',
        email: 'aaa@gmail.com',
      },
    ];
  }

  onSubmit() {}

  removeIngredient(index: number) {
    //this.productCarts.removeAt(index);
  }
}
