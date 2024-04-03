import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class SidebarComponent {}
