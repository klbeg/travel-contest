import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class AppComponent {
  title = 'travel-contest';
}
