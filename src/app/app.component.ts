import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SearchBoxComponent } from './shared/components/searchBox/searchBox.component';
import { SidebarComponent } from './shared/components/sideBar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, SidebarComponent, SearchBoxComponent],
})
export class AppComponent {
  title = 'countryWiki';
}
