import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  myToken: any = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) { }

  addProductToCart(id: string): Observable<any> {

    return this.httpClient.post(' https://ecommerce.routemisr.com/api/v1/cart',
      {
        "productId": id,
      },
      {
        headers: { token: this.myToken }
      }
    );

  }
  getLoggedUserToCart(): Observable<any> {

    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
      {
        headers: { token: this.myToken }
      }

    );

  }
  removeSpecificCartItem(id: string): Observable<any> {

    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: { token: this.myToken }
      }

    );

  }
  updateProductQuantity(id: string, newCount: number): Observable<any> {

    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "count": newCount
      },
      {
        headers: { token: this.myToken }
      }

    );

  }
  clearCart(): Observable<any> {
    return this.httpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',
      {
        headers: { token: this.myToken }
      }
    );
  }
}