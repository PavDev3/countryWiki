import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
  emitValue(value: string) {
    this.onValue.emit(value);
  }
  @Input() placeholder: string = '';

  @Output() onValue = new EventEmitter<string>();
}
