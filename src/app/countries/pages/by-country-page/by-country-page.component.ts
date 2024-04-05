import { Component } from '@angular/core';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  templateUrl: './by-country-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent],
})
export class ByCountryPageComponent {}
