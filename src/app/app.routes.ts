import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'likeur',
        loadComponent: () => import ('./pages/home-page/home-page.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
