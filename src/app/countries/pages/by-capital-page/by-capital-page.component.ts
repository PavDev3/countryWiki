import { Component } from '@angular/core';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent],
})
export class ByCapitalPageComponent {
  searchByCapital(term: string) {
    console.log({ term });
  }
  constructor() {}
}
