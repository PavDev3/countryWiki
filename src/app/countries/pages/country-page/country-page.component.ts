import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
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
        console.log(country);
      });
  }

  searchCountry(code: string) {}
}
