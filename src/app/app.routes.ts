import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'perfil',
        pathMatch: 'full',
        loadComponent: () => import('./pages/profile/profile.component').then( p => p.ProfileComponent),
    },
    {
        path: '404',
        pathMatch: 'full',
        loadComponent: () => import('./pages/not-found/not-found.component').then( p => p.NotFoundComponent),
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => import('./pages/login/login.component').then( p => p.LoginComponent),
    },
    {
        path: 'register',
        pathMatch: 'full',
        loadComponent: () => import('./pages/register/register.component').then( p => p.RegisterComponent),
    },
    {
        path: 'store/:storeId',
        pathMatch: 'full',
        loadComponent: () => import('./pages/store/store.component').then( p => p.StoreComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then( c => c.HomeComponent),
    },
    {
        path: 'partners',
        loadChildren: () => import('./pages/partnersPages/partners.routes').then( r => r.partnersRoutes),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
