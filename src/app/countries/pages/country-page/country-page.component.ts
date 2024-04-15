import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent {
  // public country?: Country;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private countriesService: CountriesService,
  //   private router: Router
  // ) {}
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //     .pipe(
  //       filter(({ id }) => id !== undefined),
  //       switchMap(({ id }) => this.countriesService.searchCountryByAlpha(id))
  //     )
  //     .subscribe((country) => {
  //       if (!country) return this.router.navigateByUrl('');
  //       return (this.country = country);
  //     });
  // }
  // searchCountry(code: string) {}
}
