import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  customers: any[] = [
    {
      name: 'Tanjim Hasan',
      imageUrl: 'https://shorturl.at/dlzFM',
      email: 'tanjim@gmail.com',
    },
    {
      name: 'Nafiul Hamim',
      imageUrl: 'https://shorturl.at/dlzFM',
      email: 'nafiul@gmail.com',
    },
    {
      name: 'Masud Rana',
      imageUrl: 'https://shorturl.at/dlzFM',
      email: 'masud@gmail.com',
    },
  ];

  onClick(event: any): void {
    alert(event.target.innerHTML);
  }
}
