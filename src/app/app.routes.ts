import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: '', component: AuthLayoutComponent ,  canActivate:[logedGuard] ,  children: [
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'register',
                loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
            }
        ]
    },

    {
        path: '', component: BlankLayoutComponent,  canActivate:[authGuard]   , children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'brands',
                loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent)
            },
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
            },
            {
                path: 'allorders',
                loadComponent: () => import('./pages/all-orders/all-orders.component').then(m => m.AllOrdersComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent)
            },
            {
                path: 'checkout/:id' ,
                loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'details/:id',
                loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent)
            },
            {
                path: 'products',
                loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
            },
            {
                path: '**',
                loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
            }
        ]
    },

];
