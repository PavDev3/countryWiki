import { Component } from '@angular/core';

import { SidebarComponent } from './countries/components/sideBar/sidebar.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CountryPageComponent, SidebarComponent],
})
export class AppComponent {
  title = 'countryWiki';
}
