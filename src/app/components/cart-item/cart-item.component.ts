import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: Cart;
  @Output() removeItem = new EventEmitter<number>();
  @Output() updateQuantity = new EventEmitter<{
    id: number;
    quantity: number;
  }>();
}
