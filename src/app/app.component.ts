import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './shared/components/searchBox/searchbox.component';
import { SidebarComponent } from './shared/components/sideBar/sidebar.component';
import { AboutPageComponent } from './shared/pages/about/about-page.component';
import { HomePageComponent } from './shared/pages/home/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomePageComponent,
    AboutPageComponent,
    CommonModule,
    SidebarComponent,
    SearchBoxComponent,
  ],
})
export class AppComponent {
  title = 'countryWiki';
}
