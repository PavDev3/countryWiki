import { Routes } from '@angular/router';

export const routes: Routes = [
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
