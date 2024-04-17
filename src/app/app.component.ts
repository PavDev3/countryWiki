import { Component } from '@angular/core';

import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CountryPageComponent],
})
export class AppComponent {
  title = 'countryWiki';
}
