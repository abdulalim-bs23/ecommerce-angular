import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent,
  },
];

@NgModule({
  declarations: [CartComponent, ShippingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutModule {}
