// partners.routes.ts
import { Routes } from '@angular/router';

export const partnersRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home-partners/home-partners.component').then(p => p.HomePartnersComponent),
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => import('./login-partners/login-partners.component').then(p => p.LoginPartnersComponent),
    },
    {
        path: 'register',
        pathMatch: 'full',
        loadComponent: () => import('./register-partners/register-partners.component').then(p => p.RegisterPartnersComponent),
    },
    {
        path: 'management-menu',
        pathMatch: 'full',
        loadComponent: () => import('./store-menu-partners/store-menu-partners.component').then(p => p.StoreMenuPartnersComponent),
    },
    {
        path: 'promotions',
        pathMatch: 'full',
        loadComponent: () => import('./store-promotions-partners/store-promotions-partners.component').then(p => p.StorePromotionsPartnersComponent),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
