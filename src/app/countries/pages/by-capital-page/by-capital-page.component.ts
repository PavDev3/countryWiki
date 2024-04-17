import { Component } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../shared/components/loadingSpinner/loadingSpinner.component';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent],
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
