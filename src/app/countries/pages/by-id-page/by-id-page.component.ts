import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { Country } from './../../interfaces/country.interface';
import { CountriesService } from './../../services/countries.service';

@Component({
  standalone: true,
  selector: 'by-id-page',
  templateUrl: './by-id-page.component.html',
})
export class ByIdPageComponent {
  public country?: Country;

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
        if (!country) return this.router.navigateByUrl('');
        // return (this.country = country);
        return;
      });
  }

  searchCountry(code: string) {}
}
