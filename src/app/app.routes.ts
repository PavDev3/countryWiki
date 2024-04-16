import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/pages/home/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },

  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/services/countries.routes').then(
        (m) => m.COUNTRIES_ROUTES
      ),
  },

  {
    path: '**',
    redirectTo: 'countries',
  },
];
