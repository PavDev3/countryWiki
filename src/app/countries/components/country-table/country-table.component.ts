import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  standalone: true,
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  imports: [CommonModule, RouterLink],
  styles: [
    `
      img {
        width: 40px;
        border-radius: 10%;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
}
