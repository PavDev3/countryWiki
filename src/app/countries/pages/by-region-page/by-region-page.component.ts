import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'app-by-region-page',
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountryTableComponent, CommonModule],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
