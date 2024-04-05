import { Component } from '@angular/core';
import { SearchBoxComponent } from './../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent],
})
export class ByRegionPageComponent {}
