import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  private readonly router= inject(Router);

  userData: any = null;
sendRegisterForm(data: object):Observable<any> { 
  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);  
}
sendLoginForm(data: object):Observable<any> { 
  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);  
}

saveUserData(): void {
  if (localStorage.getItem('token') !== null) {
    this.userData == jwtDecode(localStorage.getItem('token')!);
   
  }
 }

 logOut(): void { 
  localStorage.removeItem('token');
  this.userData = null;
    this.router.navigate(['/login']);
 }

}
