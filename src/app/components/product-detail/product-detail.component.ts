import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product?: Product;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  increaseQuantity = () => this.quantity++;

  decreaseQuantity = () => this.quantity > 1 && this.quantity--;

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  goBack() {
    this.location.back();
  }

  addToCart() {
    //this.cartService.addToCart(this.product!, this.quantity);
  }

}
