import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private httpClient:HttpClient) { }
  myToken: any = localStorage.getItem('token');


    checkoutPayment(id:string ,data:object):Observable<any>{
      return this.httpClient.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${encodeURIComponent(window.location.origin)}`, 
        { shippingAddress: data }
      );
    }
}
