import { Component, OnInit } from '@angular/core';
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
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.casheStore.byCapital.countries;
    this.initialValue = this.countriesService.casheStore.byCapital.term;
  }
  searchByCapital(term: string) {
    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
