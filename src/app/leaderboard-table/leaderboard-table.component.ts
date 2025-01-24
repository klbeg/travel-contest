import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PlayerScore } from '../player-score';
import { ScoresService } from '../scores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard-table',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './leaderboard-table.component.html',
  styleUrl: './leaderboard-table.component.css',
})
export class LeaderboardTableComponent {
  scoresService: ScoresService = inject(ScoresService);
  allScores: PlayerScore[] = [];

  constructor() {
    this.scoresService
      .getAllScores()
      .then((scores: PlayerScore[]) => (this.allScores = scores));
  }
}
