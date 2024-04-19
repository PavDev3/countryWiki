import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../shared/components/loadingSpinner/loadingSpinner.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';
import { CountriesService } from './../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  templateUrl: './by-country-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.casheStore.byCountry.countries;
    this.initialValue = this.countriesService.casheStore.byCountry.term;
  }
  searchByCountry(term: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
