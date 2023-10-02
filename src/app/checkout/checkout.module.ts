import { NgModule } from '@angular/core'; 
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MaterialComponentsModule } from '../shared/material-components.module';

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
  imports: [RouterModule.forChild(routes), MaterialComponentsModule],
  exports: [RouterModule],
})
export class CheckoutModule {}
