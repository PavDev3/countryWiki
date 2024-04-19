import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../shared/components/loadingSpinner/loadingSpinner.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    CommonModule,
    LoadingSpinnerComponent,
  ],
})
export class ByRegionPageComponent implements OnInit {
  public isLoading = false;
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
  ngOnInit(): void {
    this.countries = this.countriesService.casheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.casheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
