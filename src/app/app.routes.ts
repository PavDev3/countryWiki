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
    path: 'about',
    loadComponent: () =>
      import('./shared/pages/about/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./shared/pages/contact/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/services/countries.routes').then(
        (m) => m.CountryRoutes
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
