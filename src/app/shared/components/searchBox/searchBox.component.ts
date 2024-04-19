import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, debounceTime } from 'rxjs';

@Component({
  standalone: true,
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit {
  private debounce: Subject<string> = new Subject<string>();
  private destroyRef = inject(DestroyRef);

  emitValue(value: string) {
    this.onValue.emit(value);
  }
  @Input() placeholder: string = '';
  @Input() initialValue: string = '';

  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit() {
    this.debounce
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300))
      .subscribe((searchTerm) => {
        this.onDebounce.emit(searchTerm);
      });
  }

  onKeyPress(searchTerm: string) {
    this.debounce.next(searchTerm);
  }
}
