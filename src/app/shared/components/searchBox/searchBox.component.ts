import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
}
