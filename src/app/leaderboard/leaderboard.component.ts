import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeaderboardTableComponent } from '../leaderboard-table/leaderboard-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  imports: [LeaderboardTableComponent, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class LeaderboardComponent implements OnInit {
  user: string | null;

  constructor(private ref: ChangeDetectorRef) {
    this.user = null;
  }

  ngOnInit(): void {}

  signIn() {
    console.log('signIn called');
  }

  signOut() {
    console.log('signOut called');
  }
}
