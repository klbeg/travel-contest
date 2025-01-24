import { Component, inject } from '@angular/core';
import { ScoresService } from '../scores.service';
import { TripScoreBreakdown } from '../player-score';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-breakdown-table',
  imports: [CommonModule],
  templateUrl: './score-breakdown-table.component.html',
  styleUrl: './score-breakdown-table.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ScoreBreakdownTableComponent {
  scoresService: ScoresService = inject(ScoresService);
  scoreBreakdowns: TripScoreBreakdown[] = [];

  constructor() {
    this.scoresService
      .getPlayerScoreBreakdown()
      .then((scores: TripScoreBreakdown[]) => (this.scoreBreakdowns = scores));
  }
}
