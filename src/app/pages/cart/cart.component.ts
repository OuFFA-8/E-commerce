import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { ICart } from '../../shared/interfaces/icart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  private readonly cartService = inject(CartService);

  cartDetails: ICart = {} as ICart;

  ngOnInit(): void {
    this.getCardData();
  }

  getCardData(): void {
    this.cartService.getLoggedUserToCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeItem(id: string): void {
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateCount(id: string, newCount: number): void {
    this.cartService.updateProductQuantity(id, newCount).subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  clearItems(): void {  
     this.cartService.clearCart().subscribe({
      next: (res) => {
        console.log(res.data);
       if(res.message==="success"){
         this.cartDetails = {} as ICart;
         
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
