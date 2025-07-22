import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/counter/counter.component').then(m => m.CounterComponent)
    }
];
