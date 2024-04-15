import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { Country, Languages } from './../../interfaces/country.interface';
import { CountriesService } from './../../services/countries.service';

@Component({
  standalone: true,
  selector: 'by-id-page',
  imports: [CommonModule, SearchBoxComponent],

  templateUrl: './by-id-page.component.html',
})
export class ByIdPageComponent {
  public country?: Country;

  public languagesList?: string;
  public currenciesList?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        filter(({ id }) => id !== undefined),
        switchMap(({ id }) => this.countriesService.searchCountryByAlpha(id))
      )
      .subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('');
          return;
        }

        this.country = country;
        this.languagesList = this.languagesObjectToArray(country.languages);
        this.currenciesList = this.getCurrencyNames(
          country.currencies as { [key: string]: { name: string } }
        );
      });
  }

  languagesObjectToArray(languages: Languages) {
    return Object.values(languages).join(', ') || 'No languages';
  }

  getCurrencyNames(currencies: { [key: string]: { name: string } }) {
    return Object.values(currencies)
      .map((currency) => currency.name)
      .join(', ');
  }
}
