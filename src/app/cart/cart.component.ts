import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule], // No HttpClientModule or provideHttpClient here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems(): void {
    this.cartService.getCarts().subscribe(
      (data) => {
        this.carts = data;
        this.isLoading = false;
        console.log('Fetched cart items:', data);
      },
      (error) => {
        console.error('Error fetching carts:', error);
        this.errorMessage = 'Failed to load cart items.';
        this.isLoading = false;
      }
    );
  }
}
