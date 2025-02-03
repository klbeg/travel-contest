import { Component } from '@angular/core';
import { LeaderboardTableComponent } from '../leaderboard-table/leaderboard-table.component';

@Component({
  selector: 'app-leaderboard',
  imports: [LeaderboardTableComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class LeaderboardComponent {
  syncCalendar() {
    console.log('clicked');
  }
}
