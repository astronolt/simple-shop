import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  items: Cart[] = [];

  ngOnInit(): void {
    this.getItems();
  }

  total() {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getItems() {
    this.cartService.getItems().subscribe((items) => (this.items = items));
  }

  removeItem(id: number) {
    this.items = this.cartService.removeItem(id);
  }

  updateQuantity({ id, quantity }: { id: number; quantity: number }) {
    this.items = this.cartService.updateQuantity(id, quantity);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
