import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'likeur',
        loadComponent: () => import ('./pages/home-page/home-page.component')
    },
    {
        path: 'about',
        title: 'about me',
        loadComponent: () => import ('./pages/about/about.component')
    },
    {
        path: 'work',
        title: 'work',
        loadComponent: () => import ('./pages/work/work.component')
    },
    {
        path: 'skills',
        title: 'skills',
        loadComponent: () => import ('./pages/skills/skills.component')
    },
    {
        path: 'contact',
        title: 'contact',
        loadComponent: () => import ('./pages/contact/contact.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
