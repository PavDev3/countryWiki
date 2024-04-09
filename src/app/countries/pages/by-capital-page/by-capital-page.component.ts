import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}
  searchByCapital(term: string) {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
