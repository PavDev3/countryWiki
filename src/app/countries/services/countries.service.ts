import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
import { Country } from './../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  public casheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: 'Africa', countries: [] },
  };

  constructor() {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  searchCountryByAlpha(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.casheStore.byCapital = { term, countries }))
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.casheStore.byCountry = { term, countries }))
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.casheStore.byRegion = { region, countries }))
    );
  }
}
